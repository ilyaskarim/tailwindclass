# tailwindclass

Tailwind classes are long, easily wrap classes for tailwind. Generally you type tailwind.

Installation:

Yarn
```log
yarn add tailwindclass
```
Npm

```npm
npm install tailwindclass
```

Usage:

```javascript
import tailwindclass from "tailwindclass";

function App() {
  return (
    <div>
      <h1
        className={tailwindclass({
          default: "text-[red]",
          hover: ["text-[blue]"],
          _2xl: ["text-[purple]"]
        })}
      >
        Hello world!
      </h1>
    </div>
  );
}

export default App;
```


This class in tailwind:


```javascript

function App() {
  return (
    <div>
      <h1 className="text-[red] hover:text-[blue]" >
        Hello world!
      </h1>
    </div>
  );
}

export default App;
```


Can be converted into something like this:

```javascript
import tailwindclass from "tailwindclass";

function App() {
  return (
    <div>
      <h1
        className={tailwindclass({
          default: "text-[red]",
          hover: ["text-[blue]"],
          _2xl: ["text-[purple]"]
        })}
      >
        Hello world!
      </h1>
    </div>
  );
}

export default App;
```




`tailwindclass` is a typed class which supports. This function makes adding classes very easy. 


**Note** 

`2xl` can be written as `_2xl`

<img width="605" alt="Screenshot 2022-05-18 at 9 43 20 PM" src="https://user-images.githubusercontent.com/42450390/169096966-6b79d03a-e0fc-4259-b853-60790d8e1182.png">


## Did you find a grammatical mistake in the documentation?

If you came across a grammatical mistake please create a new issue with more details in the description: [here](https://github.com/ilyaskarim/tailwindclass/issues/new?title=I%20found%20a%20grammatical%20mistake).

## Contribute & Support

Pull requests are welcome. If you have discovered a bug or have a feature suggestion, feel free to create an issue on GitHub.

If you'd like to make some changes yourself, see the following:

- Fork this repository to your own GitHub account and then clone it to your local device
- Make sure yarn is globally installed (npm install -g yarn)
- Run yarn to download required packages.
- Build and start the application: `yarn build && yarn test`. Which tests the function. 
- If you contributed something new, run yarn contrib:add <your GitHub username> <contribution type> to add yourself to the contributors list
- Finally, submit a pull request with your changes!
- You can add more cases to index.test.js make function `tailwindclass` more accurate. 
