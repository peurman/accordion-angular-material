# ACCORDION CHALLENGE

(created on December 2022)
<br/>
* *Deploy*: **<a target="_blank" href="https://accordion-peurman.netlify.app/">HERE</a>**

## Angular Trainee Program - week 5

This is an accordion made with CSS. <br />
It has a list of cars brands and models organized by origin: <br />
• American<br />
• Japanese<br />
• German<br />

Every car brand shows **a table with its models**. The table was made with **Angular Material Component**, using MatTable. <br />

### Attributes of each car model:

• Brand <br />
• Model<br />
• Category<br />
• Release Year<br />
• Engine Description<br />
• Weight<br />
• Price<br />
• Logo<br />
• Car Images<br />

The **accordion component** receive **two inputs**, one for header information and another for a list of cars.<br />

The accordion expand and collapse. At the beginning all items are collapsed. <br />
The header title shows the origin ot¡f the car brands. Clicking a header, that category is expanded, and the brands for that category are shown.<br />

The app doesn´t use **Any** to define object types, and it uses **two typescript interfaces** and **two services**.

The app has a **button "Expand All"** that when is clicked, all accordions expand their content. Then the button changes its name to **"Contract All"** that when is clicked, all accordions contract their content.
