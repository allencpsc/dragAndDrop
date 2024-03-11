import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { useState } from 'react';

function App() {
  const [widgets, setWidgets] = useState([]);

  function handleOnDrag(dragEvent, widgetType){
    dragEvent.dataTransfer.setData("widgetType", widgetType)
  }

  function handleOnDrop(dragEvent) {
    const widgetType = dragEvent.dataTransfer.getData("widgetType")
    console.log("widgetType", widgetType)
    setWidgets([...widgets, widgetType])
  }

  function handleDragOver(dragEvent){
    dragEvent.preventDefault();
  }

  return (
    <div className="App">
      <Nav
        greeting="Page Name"
        location="/home"
      />
      <div className="widgets">
        <div
          className="widget"
          draggable
          onDragStart={(dragEvent) => handleOnDrag(dragEvent, "Widget A")}
        >
          Widget A
        </div>
        <div
          className="widget"
          draggable
          onDragStart={(dragEvent) => handleOnDrag(dragEvent, "Widget B")}
        >
          Widget B
        </div>
        <div
          className="widget"
          draggable
          onDragStart={(dragEvent) => handleOnDrag(dragEvent, "Widget C")}
        >
          Widget C
        </div>
      </div>
      <div className="page" onDrop={handleOnDrop} onDragOver={handleDragOver}>
        {widgets.map((widget, index) => (
          <div classNmae="dropped-widget" key={index}>
            {widget}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
