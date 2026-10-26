import { Counter } from "./Counter";

// Presentation
export function User({ name, pic }) {
  return (
    <div className="user-container">
      <img src={pic} alt={name} />
      <p>
        Hello, <span>{name}</span> 🎉 🎉
      </p>
      <Counter />
    </div>
  );
}
