export default function Intro() {
  return (
    <div className='min-h-screen max-h-screen container px-16'>
      <div className='flex flex-col justify-center h-screen'>
        <img src='/me.jpeg' className='rounded-xl w-36 h-36' />
        <p className='prose text-4xl font-bold mt-10'>
          ReactJS/React Native Developer
        </p>
        <br />
        <p className='prose text-3xl font-medium mt-3'>
          Hi! I am Cyrus Rohail.
        </p>
      </div>
    </div>
  );
}
