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
  Code,
  CodePane,
  Appear,
  Anim
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
  renderContext: require("./example/context.render.example"),
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
          <Heading fit>An unrelated question</Heading>
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
            <Heading fit>Mixins didn't make it into the es class spec</Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading fit>Also mixins considered harmful</Heading>
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
                Indirection - where does the state value, or method come from?
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading fit>Sharing Attempt #2 HOC</Heading>
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
          <Appear>
            <BlockQuote>
              <Quote>
                I can do anything you're doing with your HOC using a regular
                component with a render prop. Come fight me.
              </Quote>
              <Cite>@mjackson</Cite>
            </BlockQuote>
          </Appear>
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
            <Appear>
              <ListItem>Same as state in a class component</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Code textSize={30}>
                  const [state, setState] = useState(initialState);
                </Code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>state - is the current state</ListItem>
            </Appear>
            <Appear>
              <ListItem>setState - updates the state</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                initialState can be a value or function <Code>() => state</Code>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading fit>useEffect</Heading>
          <List>
            <Appear>
              <ListItem>
                kinda like componentWillMount and componentWillUnmount
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <Code textSize={30}>useEffect(didUpdate,[deps]);</Code>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                didUpdate - method to run on render may return a cleanup
                function
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                deps - optional array of arguments to watch, if not set will
                always update on render
              </ListItem>
            </Appear>
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
            <Appear>
              <ListItem>Only call hooks at the top level</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Can only be called from react function components
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Or in a custom hooks</ListItem>
            </Appear>
          </List>
          <Appear>
            <Text>Use eslint-plugin-react-hooks to enforce these rules</Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading fit>Hook Primitives - Basic</Heading>
          <List fit>
            <Appear>
              <ListItem>useState - similar to state on component</ListItem>
            </Appear>
            <Appear>
              <ListItem>useEffect - similar and mount and unmount</ListItem>
            </Appear>
            <Appear>
              <ListItem>useContext - lets you use react context value</ListItem>
            </Appear>
            <Appear>
              <ListItem>useRef - similar to React.createRef()</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                useDebugValue - adds debug labels for DevTools
              </ListItem>
            </Appear>
          </List>
          <Appear>
            <Text>Let's have a look at useContext</Text>
          </Appear>
        </Slide>
        <Slide>
          <Heading fit>Setup Context</Heading>
          <CodePane textSize={18} lang="js" source={code.context} />
        </Slide>
        <Slide>
          <Heading fit>Render prop</Heading>
          <CodePane textSize={18} lang="js" source={code.renderContext} />
        </Slide>
        <Slide>
          <Heading fit>With useContext</Heading>
          <CodePane textSize={20} lang="js" source={code.useContext} />
        </Slide>
        <Slide>
          <Heading fit>Hook Primitives - Advanced</Heading>
          <List fit>
            <Appear>
              <ListItem>
                useLayoutEffect - same useEffect but after paint
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>useMemo - returns a memoized value</ListItem>
            </Appear>
            <Appear>
              <ListItem>useCallback - returns a memoized callback</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                useImperativeHandle - lets you customize a ref for forwarding
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading fit>How do you test hooks?</Heading>
          <List>
            <Appear>
              <ListItem>Remember the rules of hooks</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Have to be rendered inside of a functional component
              </ListItem>
            </Appear>
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
          <Heading fit>So I wrote a library</Heading>
          <Appear>
            <Heading fit>
              introducing <Code>test-react-hooks</Code>
            </Heading>
          </Appear>
          <Appear>
            <BlockQuote>
              <Quote>The easiest way to test react hooks.</Quote>
              <Appear>
                <Quote>Fight me.</Quote>
              </Appear>
              <Appear>
                <Cite>Me</Cite>
              </Appear>
            </BlockQuote>
          </Appear>
        </Slide>
        <Slide>
          <Heading fit>Self promotion Time</Heading>
        </Slide>
        <Slide>
          <Appear>
            <Heading>Applause</Heading>
          </Appear>
          <Appear>
            <Heading>And perhaps a whistle</Heading>
          </Appear>
          <Appear>
            <Heading>Too much?</Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading>Q&A</Heading>
        </Slide>
      </Deck>
    );
  }
}
