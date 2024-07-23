/* 
  ReactDOM:
    {
      rootElement: null,
      createRoot(){
        root: {
          render(){
            Some code is here...
          }
        }
      },
    }
*/

const ReactDom = {
  rootElement: null,
};

ReactDom.createRoot = function (rootElement) {
  const root = {
    rootElement,
  };

  root.render = function (...components) {
    const virtualDOM = document.createDocumentFragment();
    components.forEach((component) => {
      virtualDOM.appendChild(component);
    });

    this.rootElement.appendChild(virtualDOM);
  };

  return root;
};

export default ReactDom;
