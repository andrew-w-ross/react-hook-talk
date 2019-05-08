import "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "spectacle-theme-nova/syntax/prism.nova.css";
import "spectacle-theme-nova/syntax/prism-javascript";
import "spectacle-theme-nova/syntax/prism-typescript";
import React from "react";
import createTheme from "spectacle-theme-nova";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Magic,
  Code,
  CodePane,
  Appear
} from "spectacle";
// Import theme

// Require CSS
const theme = createTheme();

const code = {
  // eslint-disable-next-line import/no-webpack-loader-syntax
  counterOld: require("./example/counter-old.example"),
  mixin: require("./example/mixin.example"),
  hoc: require("./example/hoc.example"),
  hocUsage: require("./example/hoc.usage.example"),
  renderProp: require("./example/render.example"),
  renderPropUsage: require("./example/render.usage.example"),
  hookCount: require("./example/counter.hook.example"),
  hookSubscription: require("./example/hook.subscription.example"),
  hookSubscriptionCustom: require("./example/hook.subscription-custom.example"),
  context: require("./example/context.example"),
  useContext: require("./example/useContext.example"),
  useCounter: require("./example/useCounter.example"),
  testSetup: require("./example/component.setup.example"),
  componentTest: require("./example/component.test.example"),
  reactHooksTest: require("./example/test-react-hooks.counter.example")
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} transition={["slide"]} transitionDuration={500}>
        <Slide>
          <BlockQuote fit>
            <Quote textSize={55}>React Hooks - Mixins done right</Quote>
            <Cite>Andrew Ross</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Heading fit>A quick question</Heading>
          <Appear>
            <Text>How do we share code between components?</Text>
          </Appear>
          <Appear>
            <Text>
              Or how do we isolate code that depends on lifecycle methods?
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading fit>In the long long ago </Heading>
          <Appear>
            <Heading>2015</Heading>
          </Appear>
          <Appear>
            <Text>
              React components used to be created with a method called
              <Code>React.createClass</Code>
            </Text>
          </Appear>
          <Appear>
            <Text>Lets take a quick look at how you would have used it.</Text>
          </Appear>
        </Slide>
        <Slide>
          <CodePane textSize={22} lang="js" source={code.counterOld} />
        </Slide>
        <Slide>
          <Heading fit>Sharing Attempt #1 Mixins</Heading>
        </Slide>
        <Slide>
          <CodePane textSize={16} lang="js" source={code.mixin} />
        </Slide>
        <Slide>
          <Heading fit>It was perfect</Heading>
          <Appear>
            <Heading>Until 2016</Heading>
          </Appear>
          <Appear>
            <Heading fit>Mixins didn't make it into the es spec</Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading fit>Mixins considered harmful</Heading>
          <List>
            <Appear>
              <ListItem>Clashes on class methods</ListItem>
            </Appear>
            <Appear>
              <ListItem>State key clashes</ListItem>
            </Appear>
            <Appear>
              <ListItem>Configuration nightmare</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Complexity would snowball when with multiple mixins depend on
                each other
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Mutates your original component</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Indirection - where does the state value come from?
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={3}>Sharing Attempt #2 Higher Order Components</Heading>
        </Slide>
        <Slide>
          <CodePane textSize={16} lang="js" source={code.hoc} />
        </Slide>
        <Slide>
          <CodePane textSize={20} lang="js" source={code.hocUsage} />
        </Slide>
        <Slide>
          <Heading size={2}>HOC Pros</Heading>
          <List>
            <Appear>
              <ListItem>Doesn't mess with your component</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Simpler configuration
                <br />
                <Code>withSomething(config)(Component)</Code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Nothing special was added, just a pattern</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={2}>HOC Cons</Heading>
          <List>
            <Appear>
              <ListItem>Property clashes</ListItem>
            </Appear>
            <Appear>
              <ListItem>Using more than one is kinda awkward</ListItem>
            </Appear>
            <Appear>
              <Code textSize={18}>
                withSubscription(config)(withStyle(styleConfig)(withRouter(Component))))
              </Code>
            </Appear>
            <Appear>
              <ListItem>
                Configuration is still hard if it depends on a value within your
                component
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Indirection - where does the prop value come from?
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading fit>Sharing Attempt #2.5 Render Props</Heading>
        </Slide>
        <Slide>
          <CodePane textSize={18} lang="js" source={code.renderProp} />
        </Slide>
        <Slide>
          <CodePane textSize={20} lang="js" source={code.renderPropUsage} />
        </Slide>
        <Slide>
          <Heading size={2}>Render Props Pros</Heading>
          <List>
            <Appear>
              <ListItem>Doesn't mess with your component</ListItem>
            </Appear>
            <Appear>
              <ListItem>Easiest configuration, just pass props in</ListItem>
            </Appear>
            <Appear>
              <ListItem>Nothing special was added, just a pattern</ListItem>
            </Appear>
            <Appear>
              <ListItem>No property clashes</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={2}>Render Props Cons</Heading>
          <List>
            <Appear>
              <ListItem>
                Indirection when interacting with your own state
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Render method can get quite noisy</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading fit>I thought this was a talk about hooks?</Heading>
          <Appear>
            <Heading fit>Demo time</Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading size={2}>What is a hook</Heading>
          <Text>
            Hooks let you hook into the react lifecycle methods without a class
          </Text>
        </Slide>
        <Slide>
          <Heading size={1}>useState</Heading>
          <List>
            <ListItem>Same as state in a class component</ListItem>
            <ListItem>
              <Code textSize={30}>
                const [state, setState] = useState(initialState);
              </Code>
            </ListItem>
            <ListItem>state - is the current state</ListItem>
            <ListItem>setState - updates the state</ListItem>
            <ListItem>
              initialState can be a value or function <Code>() => state</Code>
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1}>useEffect</Heading>
          <List>
            <ListItem>
              kinda like componentWillMount and componentWillUnmount
            </ListItem>
            <ListItem>
              <Code textSize={30}>useEffect(didUpdate,[deps]);</Code>
            </ListItem>
            <ListItem>
              didUpdate - method to run on render may return a cleanup function
            </ListItem>
            <ListItem>
              deps - optional array of arguments to watch, if not set will
              always update on render
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <CodePane textSize={20} lang="js" source={code.hookSubscription} />
        </Slide>
        <Slide>
          <Heading fit>Sharing Attempt #3 custom hooks</Heading>
        </Slide>
        <Slide>
          <CodePane
            textSize={20}
            lang="js"
            source={code.hookSubscriptionCustom}
          />
        </Slide>
        <Slide>
          <Heading fit>Rules of hooks</Heading>
          <List>
            <ListItem>Only call hooks at the top level</ListItem>
            <ListItem>
              Can only be called from react function components
            </ListItem>
            <ListItem>Or custom hooks</ListItem>
          </List>
          <Text>Use eslint-plugin-react-hooks to enforce these rules</Text>
        </Slide>
        <Slide>
          <Heading fit>Hook Primitives - Basic</Heading>
          <Appear>
            <List fit>
              <ListItem>useState - similar to state on component</ListItem>
              <ListItem>useEffect - similar and mount and unmount</ListItem>
              <ListItem>useContext - lets you use react context value</ListItem>
              <ListItem>useRef - similar to React.createRef()</ListItem>
              <ListItem>
                useDebugValue - adds debug labels for DevTools
              </ListItem>
            </List>
          </Appear>
          <Appear>
            <Text>Let's have a look at useContext</Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading fit>Current method</Heading>
          <CodePane textSize={18} lang="js" source={code.context} />
        </Slide>
        <Slide>
          <Heading fit>With useContext</Heading>
          <CodePane textSize={20} lang="js" source={code.useContext} />
        </Slide>
        <Slide>
          <Heading fit>Hook Primitives - Advanced</Heading>
          <List fit>
            <ListItem>
              useLayoutEffect - same useEffect but after paint
            </ListItem>
            <ListItem>useMemo - returns a memoized value</ListItem>
            <ListItem>useCallback - returns a memoized callback</ListItem>
            <ListItem>
              useimperativehandle - lets you customize a ref for forwarding
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading fit>How do you test hooks?</Heading>
          <List>
            <ListItem>Remember the rules of hooks</ListItem>
            <ListItem>
              Have to be rendered inside of a functional component
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading fit>Create your hook</Heading>
          <CodePane textSize={20} lang="js" source={code.useCounter} />
        </Slide>
        <Slide>
          <Heading fit>Setup your test component</Heading>
        </Slide>
        <Slide>
          <CodePane textSize={15} lang="js" source={code.testSetup} />
        </Slide>
        <Slide>
          <Heading fit>Test your component</Heading>
          <CodePane textSize={15} lang="js" source={code.componentTest} />
        </Slide>
        <Slide>
          <Heading fit>That was horrible</Heading>
          <Appear>
            <Heading fit>Can we do better?</Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading>Demo time</Heading>
        </Slide>
        <Slide>
          <Heading>Q&A</Heading>
        </Slide>
      </Deck>
    );
  }
}
