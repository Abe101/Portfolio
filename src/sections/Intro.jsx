export default function Intro() {
  return (
    <div className='min-h-screen max-h-screen container p-5'>
      <div className='flex flex-col justify-center items-center h-screen'>
        <img
          src='/me.jpeg'
          className='rounded-full w-36 h-36 drop-shadow-[0_0_2rem_darkslateblue]'
        />
        <p className='prose text-4xl font-semibold mt-10 text-center'>
          Hi! I am Cyrus Rohail.
        </p>
        <br />
        <p className='prose text-3xl font-medium mt-3 text-center'>A ReactJS/React Native Developer</p>
      </div>
    </div>
  );
}
