import Link from 'next/link';
import Image from 'next/image';
export const HomePage =({ data }) =>(
    <main>
        {data?.map((e) => (
          <Link key={e.id} href={`/events/${e.id}`}>
            <Image width={300} height={300} alt={e.title} src={e.image} />
            <h2>{e.title}</h2>
            <p>{e.description}</p>
          </Link>
        ))}
      </main>
);