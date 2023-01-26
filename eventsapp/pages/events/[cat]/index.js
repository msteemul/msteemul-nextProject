import CatEvent from '../../../src/components/events/catEvent';
const EventsCatPage = ({ data, pageName }) => <CatEvent data={data} pageName={pageName}/>;
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
