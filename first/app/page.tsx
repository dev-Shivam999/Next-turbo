import Link from "next/link";

async function cre() {
  const data = await fetch('http://localhost:3000/api/user')
  const res = await data.json();
  return res


}


export default async function Home() {
  const data = await cre()
  return (
    <div>
      hi there

      <div>
        {
          <>
            <div>{

              data.email}</div>
            <div>{

              data.name}</div></>
        }
      </div>

      <Link href={'/signUp'}>Link</Link>
    </div>
  );
}
