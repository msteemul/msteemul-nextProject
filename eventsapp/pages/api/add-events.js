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

export default function add(req, res) {
  const { method } = req;
  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);

  if (!allEvents) {
    return res.status(404).json({
      status: 404,
      message: 'Events data not found',
    });
  }

  if (method === 'POST') {
    console.log(req.body);
    const { id, title, city, description, image, emails_registered } = req.body;
    const newEvent = {
      id: title,
      title: title,
      city: city,
      description: description,
      image: image,
      emails_registered: [],
    };

    // const AllEventsCheck = allEvents.map((ev) => {
    //   if (ev.id === id) {
    //     res.status(409).json({ message: 'This event already exists' });
    //     return ev;
    //   } return {
    //     ...allEvents.append(newEvent),
    //   }
    // });
    const AllEventsCheck = (allEvents) =>{
        allEvents.push(newEvent);
        return allEvents;
    }
    fs.writeFileSync(filePath, JSON.stringify({ events_categories, allEvents: AllEventsCheck }));
    res.status(201).json({
      message: `${title} has been added successfully hosted!`,
    });
  }
}
