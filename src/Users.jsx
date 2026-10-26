import { User } from "./User";

// Smart (data)  -> Presentation (Display) Component
// Smart
export function Users() {
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
