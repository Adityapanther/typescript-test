type Mybool = true | false

interface Hello {
    isTrue: Mybool
}

const data: Hello = {
    isTrue: true
}

console.log(data.isTrue);


type WindowStates = "open" | "closed" | "minimized";

interface Windows {
    state: WindowStates
}

const windows: Windows = {
    state: "open"
}

console.log(windows.state);
