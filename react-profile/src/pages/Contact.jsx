export default function Contact() {
    
  return (
    <main>
      <div>
        <h1>Contact</h1>
      </div>
      <div className="contactdiv">
        <h2>Name:</h2>
        <input type="text" placeholder="name" style={{ width: "400px" }} />
        <h2>Email:</h2>
        <input type="text" placeholder="email" style={{ width: "400px" }} />
        <h2>Message:</h2>
        <textarea id="txtarea" cols="80" rows="10"></textarea> <br />
        <input type="button" value="Submit" />
      </div>
    </main>
  );
}
