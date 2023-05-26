<h1>WildPark: Parking Management System</h1>

<img src="https://img.shields.io/badge/Django-4.2.1-green"> <img src="https://img.shields.io/badge/ReactJS-18.2.0-yellow">

<h2>Description</h2>
WildPark is a parking management solution that offers a simple and practical parking experience. Smart parking space management, which makes it simple for drivers to find available parking spaces, is one of its main benefits. To ensure that vehicles have a reserved spot before arrival, the system offers parking space booking and reservations. Drivers can use a variety of payment options to make cashless payments with WildPark. For CIT University students and staff, this system provides an effective and smooth parking experience that minimizes the time and effort needed to park.

<h2>Requirements</h2>
<ul>
  <li>
    <b>Python libraries</b>
    <ul>
      <li>django 4.2.1</li>
      <li>django-cors-headers 4.0.0</li>
    </ul>
  </li>
  <li>
    <b>React modules</b>
    <ul>
      <li>axios 1.4.0</li>
      <li>bootstrap 5.2.3</li>
      <li>react-bootstrap 2.7.4</li>
    </ul>
  </li>
</ul>

<h2>Setting up the development environment</h2>
<ol>
  <li>
    Download & Install <a href="https://www.python.org/downloads/">Python</a>, as well as <a href="https://nodejs.org/en/download">NodeJs</a>.
  </li>
  <li>
    Open git bash or any other git client and navigate to the location where you want to save a local copy of this repo.
  </li>
  <li>
    Clone this repository using the command below.
    <pre><code>git clone https://github.com/cxrvxxxx/wildpark.git</code></pre>
  </li>
  <li>
    (Optional) <b>Set-up a virtual environment</b>
    <ol>
      <li>
        In a CLI like <i>Command Prompt</i> (for Windows), change directory into the 'wildpark' folder.
      </li>
      <li>
        Create a virtual environment. 
        <pre><code>py -m venv .venv</code></pre>
      </li>
      <li>
        Activate the virtual environment.
        <pre><code>py -m venv .venv</code></pre>
      </li>
    </ol>
  </li>
  <li>
    Install Django using pip.
    <pre><code>pip install django</code></pre>
  </li>
  <li>
    Install django-cors-headers using pip.
    <pre><code>pip install django-cors-headers</code></pre>
  </li>
  <li>
    To install ReactJs dependencies, navigate to the 'wildpark-web' folder.
  </li>
  <li>
    Install axios.
    <pre><code>npm install axios</code></pre>
  </li>
  <li>
    Install bootstrap.
    <pre><code>npm install bootstrap</code></pre>
  </li>
  <li>
    Install react-bootstrap.
    <pre><code>npm install react-bootstrap</code></pre>
  </li>
</ol>
    
<h2>Running the app</h2>
<ol>
  <li>
    Open a CLI instance such as Command Prompt on Windows, navigate to the root folder of this project, and run the command below.
    <pre><code>py manage.py runserver</code></pre>
  </li>
  <li>
    In another CLI instance, navigate to the 'wildpark-web' folder and run the command below.
    <pre><code>npm start</code></pre>
  </li>
</ol>
    
<h4>Congratulations! You have now completed the setup process.</h4>
    
<h2>For future implementation:</h2>
<ul>
  <li>Backend Framework: Django is a great choice for the backend, as it provides a comprehensive set of tools and features for web development with Python. It offers built-in support for handling routing, database management, authentication, and more. Django's robustness, scalability, and security make it suitable for building complex applications.</li>
  <li>Database: For the database, you can consider using PostgreSQL with Django. PostgreSQL is a powerful and reliable relational database that integrates well with Django, offering advanced features, strong data integrity, and excellent scalability. It supports spatial data types and features, which can be beneficial for implementing location-based functionalities in your traffic management app.</li>
  <li>API Development: Django REST framework is a popular choice for building APIs in Django. It provides a convenient way to create RESTful APIs, allowing you to define endpoints, handle data serialization, authentication, and more. This will enable your frontend React.js application to interact with the backend seamlessly.</li>
  <li>Frontend Framework: React.js is an excellent choice for the frontend, as it allows for building dynamic and interactive user interfaces. It provides a component-based architecture, efficient rendering through the virtual DOM, and a vibrant ecosystem of libraries and tools. React.js integrates well with Django, allowing you to consume the backend API and manage the presentation layer effectively.</li>
  <li>State Management: For managing complex state within your React.js application, you can consider using a state management library like Redux or MobX. These libraries provide centralized state management, enabling efficient data flow and synchronization between components.</li>
  <li>Map Integration: Since your app involves real-time traffic monitoring, integrating a mapping service can be beneficial. You can leverage Mapbox or Google Maps API to display traffic data, visualize parking spots, and provide geolocation functionality.</li>
</ul>
