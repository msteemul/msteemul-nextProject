import Link from 'next/link';
import Image from 'next/image';
export const HomePage = ({ data }) => (
  <div className="home_body">
    {data?.map((e) => (
      <Link class="card" key={e.id} href={`/events/${e.id}`}>
        <div className="image">
          <Image width={600} height={400} alt={e.title} src={e.image} />
        </div>

        <div className="content">
          <h2>{e.title}</h2>
          <p>{e.description}</p>
        </div>
      </Link>
    ))}
  </div>
);
