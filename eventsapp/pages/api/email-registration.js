import path from 'path';
import fs from 'fs'; //allow us to read and overite data of a file

//path built so we can reach our db in this case data.json file
function buildPath() {
  return path.join(process.cwd(), 'data', 'data.json');
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export default function handler(req, res) {
  const { method } = req;

  //we need to acces our data{json file}, extract it
  //response 404 if no events
  //extract {All_events}, look through them and identify event id
  //then add the email to it in emils_registered -write functionto write our data
  //if email doesn't exist we check format of email

  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);

  //check if all events has data
  if (!allEvents) {
    return res.status(404).json({
      status: 404,
      message: 'Events data not found',
    });
  }

  if (method === 'POST') {
    const { email, eventId } = req.body;

    if (!email | !email.includes('@')) {
      res.status(422).json({ message: 'Invalid email address' });
    }

    const newAllEvents = allEvents.map((ev) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res.status(409).json({ message: 'This email has already been registered' });
          return ev;
        }
        return {
          ...ev,
          emails_registered: [...ev.emails_registered, email],
        };
      }
      return ev;
    });

    fs.writeFileSync(filePath, JSON.stringify({ events_categories, allEvents: newAllEvents }));

    res.status(201).json({
      message: `You have been registered successfully with the email: ${email} for the event: ${eventId}`,
    });
  }
}
