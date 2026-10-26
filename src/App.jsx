import "./index.css";

export default function App() {
  // JS land - Start
  const names = ["Praveen", "Sarvesh", "Adi", "Rithik"];
  console.log(names);

  return (
    <div className="app-container">
      {/* {names.map((nm) => (
        <Msg name={nm} />
      ))} */}

      <Users />
    </div>
  );
}

// Smart (data)  -> Presentation (Display) Component
function Users() {
  const users = [
    {
      name: "Monisha",
      pic: "https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_300x300.5804742914_ap2d.jpg",
    },
    {
      name: "Rapper",
      pic: "https://img.magnific.com/free-photo/comic-book-everyday-lifestyle-scene_23-2151133843.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      name: "Photographer",
      pic: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    },
  ];

  return (
    <section className="users-container">
      {users.map((usr) => (
        <User name={usr.name} pic={usr.pic} />
      ))}
    </section>
  );
}

function User({ name, pic }) {
  return (
    <div className="user-container">
      <img src={pic} alt={name} />
      <p>
        Hello, <span>{name}</span> 🎉 🎉
      </p>
    </div>
  );
}

function Msg({ name }) {
  return (
    <h1>
      Hello, <span>{name}</span> 🎉
    </h1>
  );
}
