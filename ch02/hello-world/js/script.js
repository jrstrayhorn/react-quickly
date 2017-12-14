let h1 = React.createElement('h1', null, 'Hello world!')
let link = React.createElement('a', {href:'http://www.google.com'}, 'Go to Google!!')

class HelloWorld extends React.Component {
    render() {
        /*
        if (this.props.heading)
            return React.createElement('h1', null, this.props.hellotext)
        else
            return React.createElement('p', null, this.props.hellotext)
        //return React.createElement('div', null, h1, h1)
        */
        return React.createElement(
            'h1',
            null,
            `Hello ${this.props.frameworkName} world!!!`
        )
    }
}

ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(HelloWorld, {
            id: 'ember',
            frameworkName: 'Ember.js',
            title: 'A framework for creating ambitious web applications.'}),
            React.createElement(HelloWorld, {
                id: 'backbone',
                frameworkName: 'Backbone.js',
                title: 'Backbone.js gives structure to web application...'}),
                React.createElement(HelloWorld, {
                    id: 'angular',
                    frameworkName: 'Angular.js',
                    title: 'Superheroic JavaScript MVW Framework'})
    
                
    ),
    document.getElementById('content')
)
/*
ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(HelloWorld, {
            heading: true,
            hellotext: 'Sup!'
        }),
        React.createElement(HelloWorld, {
            heading: false,
            hellotext: 'Mush Mush!'
        }),
        React.createElement(HelloWorld, {
            heading: true,
            hellotext: 'Hola!'
        })
    ),
    document.getElementById('content')
)
*/