import Image from 'next/image';

const EventsPage = ({data}) => {
  return (
    <div>
      <h1>Event Page</h1>
      <div>

        {data.map((e) => (
          
          <a key={e.id} href={`/events/${e.id}`}><Image src={e.image} alt={e.title} width={300} height={'300'} /><h2>{e.title}</h2></a>
        ))}
      </div>
    </div>
  );
};
export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json');
  console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}