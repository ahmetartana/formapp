# Form application example with react

#### Lazy :
```
React.lazy(() => import('./pages/Dashboard'))
```

#### Hooks :
```
const [counter, setCounter] = React.useState(1);
React.useEffect(() => {
    props.onCounterChange(counter);
}, [counter]);
const onCounterChange = React.useCallback((childCounter) => {
    console.log(childCounter);
}, []);
```

#### Memo :
```
MemoizedChildComponent = React.memo(ChildComponent);
```

#### Redux :
```
const { isLoggedIn } = useSelector((state: UserLoginState) => state);
const dispatch = useDispatch();
```

## Login
![alt text](https://raw.githubusercontent.com/ahmetartana/formapp/master/docs/login.png)

## Signup
![alt text](https://raw.githubusercontent.com/ahmetartana/formapp/master/docs/signup.png)

## Home Page
![alt text](https://raw.githubusercontent.com/ahmetartana/formapp/master/docs/homepage.png)

## Memoized
![alt text](https://raw.githubusercontent.com/ahmetartana/formapp/master/docs/memoized.png)

## Pagination
![alt text](https://raw.githubusercontent.com/ahmetartana/formapp/master/docs/pagination.png)
