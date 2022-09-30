import React from 'react'

function AddComment() {
  const [focused, setFocused] = React.useState(false);
  const [comment, setComment] = React.useState("");
  const [finalValue, setFinalValue] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null);
    function handleBlurEvent(event: React.FocusEvent<HTMLInputElement>) {
        setFocused(false);
      }
      function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
        setFocused(true);
      }
      function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setComment(event.target.value)
      }
      function handleSubmit(event: React.MouseEvent<HTMLButtonElement>){
        setFinalValue(comment)
        alert(`You entered ${comment} 😀`)
        finalValue === comment && setComment('');
      }
    
  return (
    <div style={{display: "flex", gap: "10px", marginLeft: "20vw", marginBottom: "20px"}}>
      <div style={{display: "flex"}}>
        <input
            type="text"
            id="default-search"
            placeholder={focused ? "" : "Add comments / feedback"}
            onFocus={handleFocus}
            value={comment}
            onBlur={handleBlurEvent}
            onChange={handleChange}
            ref={inputRef}
            style={{borderColor: "blue"}}
            autoComplete='off'
          />
      </div>
          <button
            onClick={handleSubmit}
            style={{display: "flex", fontSize: "16px", backgroundColor: "blue", color: "white", border: 'none'}}
          >
            Add Comment
          </button>
    </div>
  )
}

export default AddComment