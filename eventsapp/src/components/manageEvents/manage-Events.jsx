import React from 'react';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageEvents = () => {
  const notify = (message) => toast(`${message}`);
  const EventName = useRef();
  const EventCity = useRef();
  const EventDescription = useRef();
  const EventImage = useRef();
  const [message, setMessage] = useState('');

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const EventNameVal = EventName.current.value;
    const EventCityVal = EventCity.current.value;
    const EventDescriptionVal = EventDescription.current.value;
    const EventImageVal = EventImage.current.value;
    const eventId = router?.query.id;
    try {
      const response = await fetch('/api/add-events', {
        //hitting api endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          EventName: EventNameVal,
          eventId,
          EventCity: EventCityVal,
          EventDescription: EventDescriptionVal,
          EventImage: EventImageVal,
        }),
      });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
      EventName.current.value = '';
      EventCity.current.value = '';
      EventDescription.current.value = '';
      EventImage.current.value = '';
      notify(message);
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-header"> Host an event</div>
        <div className="form-group">
          <div>
            <label>Event Title</label>
            <input type="text" ref={EventName} id="eventTitle" placeholder="Enter Event Name" />
          </div>
          <div>
            <label>Event City</label>
            <select ref={EventCity} name="city" id="city">
              <option value="London">London</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Barcelona">Barcelona</option>
            </select>
          </div>
          <div>
            <label>Event description</label>
            <input ref={EventDescription} type="text" id="eventDescription" placeholder="Enter Event description" />
          </div>
          <div>
            <label>Event Image Url</label>
            <input
              ref={EventImage}
              type="url"
              name="image"
              id="image"
              placeholder="https://example.com"
              pattern="https://.*"
              size="30"
              required
            />
          </div>
          <button type="submit"> Submit</button>
        </div>
      </form>
      <ToastContainer
        className="toast.success"
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ManageEvents;
