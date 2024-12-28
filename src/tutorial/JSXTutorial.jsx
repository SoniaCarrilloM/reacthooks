const MyBio = ({ myName, friend1, friend2 }) => {
  return (
    <>
      <p>Hi I am {myName}</p>
      <p>hello Again my name is {friend1}</p> <hr />
      <p>And this wise one the one and only {friend2}</p>
      <p>
        {friend1} and {friend2} are my besties
      </p>
    </>
  );
};

const JSXTutorial = () => {
  const myName = 'Sonia';
  const friend1 = 'TogaLilaKikiKikoClaraLuluLilly';
  const friend2 = 'Rik';
  return (
    <div>
      <h1>Hello World</h1>
      <h2>Hello Again</h2> <hr />
      <h3>hello Again</h3> <hr />
      <MyBio myName={myName} friend1={friend1} friend2={friend2} />
    </div>
  );
};

export default JSXTutorial;
