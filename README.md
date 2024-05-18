# WebSocket Call System

## Overview

The WebSocket Call System is a web application built using Express.js and WebSocket that allows users to make and receive calls through a simple web interface. This system provides real-time call notifications and responses, creating an interactive user experience.

## Features

- **Real-Time Calling:** Users can initiate and receive calls in real-time.
- **Interactive Pop-Up:** Incoming calls trigger a pop-up for call acceptance or rejection.
- **User Notifications:** Callers receive notifications if their calls are accepted or rejected.
- **Secure User Data:** User data is securely stored and managed through environment variables.

## Project Structure

```
/WebSocket-Call-System
|-- /public
|   |-- /styles
|       |-- style.css
|   |-- hello-world.html
|   |-- user.html
|-- /views
|   |-- index.ejs
|-- app.js
|-- config.js
|-- .env
|-- package.json
|-- README.md
```

## Installation

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/WebSocket-Call-System.git
   cd WebSocket-Call-System
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Create and Configure the `.env` File**

   Create a `.env` file in the root directory and add the following content:

   ```env
   PORT=3000
   USER_MAPPING={"202":"202-John Doe","205":"205-Jane Smith","230":"230-Alice Johnson","231":"231-Bob Brown","233":"233-Charlie Davis","238":"238-David Evans","246":"246-Evelyn Foster","247":"247-Frank Green","249":"249-Grace Harris","250":"250-Henry Irving","252":"252-Ian Jackson","253":"253-Julia King","254":"254-Kevin Lee","255":"255-Linda Moore","257":"257-Michael Nelson","258":"258-Nancy Owens","259":"259-Oliver Parker","260":"260-Paul Quinn","261":"261-Quincy Roberts","279":"279-Rachel Scott","280":"280-Steve Turner","281":"281-Tracy Underwood","287":"287-Ursula Vance","290":"290-Victor White","291":"291-Wendy Xiong","293":"293-Xavier Young","294":"294-Yvonne Zimmerman","296":"296-Zachary Adams","298":"298-Aaron Baker","299":"299-Betty Clark","302":"302-Clara Davis","303":"303-Daniel Edwards","304":"304-Eleanor Franklin","305":"305-Franklin Gordon","306":"306-George Harris","309":"309-Hannah Ingram","310":"310-Irene Johnson","311":"311-James Kelly"}
   ```

4. **Start the Application**

   ```bash
   node app.js
   ```

5. **Open the Application in Your Browser**

   - Open two different browser tabs or windows.
   - Navigate one to `http://localhost:3000/user/202`.
   - Navigate the other to `http://localhost:3000/user/205` (or any other user paths as specified in the `.env` file).

## Usage

- **Initiating a Call:** Use the dropdown menu to select a user to call, then click the "Call" button.
- **Receiving a Call:** When a call is received, a pop-up will appear asking to accept or reject the call.
- **Responding to a Call:** Clicking "Accept" will navigate to the "Hello World" page, while clicking "Reject" will close the pop-up.
- **Notifications:** The caller will be notified if the call is accepted or rejected.

## Configuration

### Environment Variables

- **PORT:** The port number on which the server will run (default: 3000).
- **USER_MAPPING:** A JSON string mapping user IDs to user names.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact [swe.hamedhasan@gmail.com](mailto:swe.hamedhasan@gmail.com).

---

Thank you for using the WebSocket Call System! We hope it enhances your web communication experience.


