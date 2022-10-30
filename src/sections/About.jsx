export default function About() {
  return (
    <div className='min-h-screen container p-5'>
      <div className='flex flex-col items-center my-auto'>
        <p className='prose text-4xl font-semibold my-4'>
          A lil' something about me!
        </p>
        <p className='prose text-xl text-justify text-[#f0f0f0] my-4 flex flex-col gap'>
          <span>
            I am a Pakistani INTP self-taught developer mostly interested in
            front-end development. 👋
          </span>
          <br />
          <span>
            I am currently enrolled in the Sindh University for the Bachelors of
            Computer Science Undergratuate Study. Honestly speaking, I learned
            very less in classes than on my own. But taking a opinionative
            guess, I can tell that Universities are not meant to teach you how
            to get the task done, instead they try to carve out the Engineer in
            you. But I did not get that feeling from my university. I am not
            against the idea of joining colleges or any other medium of classes
            but I probably assume you are not here to hear that from me right
            now. 🫠
          </span>
          <br />
          <span>
            I like to play chess{" "}
            <img
              className='inline w-9 h-9 m-0 bg-[#d5953a]'
              src={"/Chess-tile-Pawn.svg"}
            />{" "}
            in my free time, play minecraft{" "}
            <img
              className='inline w-6 h-6 m-0'
              src={"/icons8-minecraft-grass-cube-gradient-32.png"}
            />{" "}
            if I am able to (I also made a Minecraft clone with React, heres a{" "}
            <span>
              <a href='https://minecraft-react-pi.vercel.app/' target='_blank'>
                link
              </a>
            </span>{" "}
            to that if you would like to check it out) and I am pretty much
            obsessed with Rubik's Cube{" "}
            <img className='inline w-5 h-5 m-0' src={"/kubiko-rubikas.svg"} />.
            Like the puzzle in your hand that messes with your mind and once you
            get the hang of the algorithms and solving techniques you find
            yourself wanting to explore your ideas and implement them on it. I
            am also interested in astrophysics related stuff 🌠, Neil deGrasse
            Tyson is a hero of mine.
          </span>
          <br />
          <span>
            I love to code and learn new technologies, if you were to ask me
            what company I like the best among the software developers I would
            glady say Vercel. They are changing the face of Javascript front-end
            industry by a mile. 🫡
          </span>
        </p>
      </div>
    </div>
  );
}
