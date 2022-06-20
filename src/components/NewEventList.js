import "./NewEventList.css"

export default function NewEventList() {
  return (
    <form className="new-event-form">
        <label>
            <span>Event Title:</span>
            <input type={"text"}></input>
        </label>
        <label>
            <span>Event Date:</span>
            <input type={"date"}></input>
        </label>
        <button>Submit</button>
    </form>
  )
}

