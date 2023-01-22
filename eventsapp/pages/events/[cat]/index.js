import Image from 'next/image';
import Link from 'next/link';
const EventsCatPage = ({ data, pageName }) => {
  return (
    <div>
      <h1>Events in {pageName}</h1>
      <div>
        {data.map((e) => (
          <Link key={e.id} href={`/events/${e.city}/${e.id}`} passHref>
            <Image width={300} height={300} alt={e.title} src={e.image} />
            <h2>{e.title}</h2>
            <p>{e.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default EventsCatPage;

//used to specify how many paths we'll use this template for
export async function getStaticPaths() {
  //importing data from the file  could also get from backend api
  //this can also be used for static pages whereas for dynamic ones we'll need both getStaticPaths and getStaticProps
  // so before deploying the app next js will analyse our app and see how many pages to create based on our data and fetch it accordingly

  const { events_categories } = await import('/data/data.json');
  //mapping through the data in data.json to return data from format so that next js builds the pages for parameters provides in this case id  id:london etc
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  console.log(allPaths);

  return {
    paths: allPaths,
    fallback: false,
  };
}

//get static paths won't work without get static props...it is needed to filter through data recieved through category id
export async function getStaticProps(ctx) {
  const { allEvents } = await import('/data/data.json');
  const id = ctx?.params.cat;
  const data = allEvents.filter((ev) => ev.city === id);
  return { props: { data, pageName: id } };
}
