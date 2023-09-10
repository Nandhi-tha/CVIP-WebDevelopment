// CodeMirror for HTML
var htmlEditor = CodeMirror.fromTextArea(document.getElementById('html-editor'), {
    mode: 'htmlmixed',
    lineNumbers: true,
    theme: 'default'
});

//CodeMirror for CSS
var cssEditor = CodeMirror.fromTextArea(document.getElementById('css-editor'), {
    mode: 'css',
    lineNumbers: true,
    theme: 'default'
});

//CodeMirror for JavaScript
var jsEditor = CodeMirror.fromTextArea(document.getElementById('js-editor'), {
    mode: 'javascript',
    lineNumbers: true,
    theme: 'default'
});

// func to execute and display code
function runCode() {
    var htmlCode = htmlEditor.getValue();
    var cssCode = cssEditor.getValue();
    var jsCode = jsEditor.getValue();
    var outputFrame = document.getElementById('output-frame');

    // Access content document of the output-frame iframe
    var iframeDocument = outputFrame.contentDocument;

    iframeDocument.open();
    iframeDocument.write(htmlCode + '<style>' + cssCode + '</style>' + '<script>' + jsCode + '</script>');
    iframeDocument.close();
}

// func to update the output based on code changes
function updateOutput() {
    var htmlCode = htmlEditor.getValue();
    var cssCode = cssEditor.getValue();
    var jsCode = jsEditor.getValue();
    var outputFrame = document.getElementById('output-frame');

    // Access content document of the output-frame iframe
    var iframeDocument = outputFrame.contentDocument;

    iframeDocument.open();
    iframeDocument.write(htmlCode + '<style>' + cssCode + '</style>' + '<script>' + jsCode + '</script>');
    iframeDocument.close();
}

// Get run button by its ID
var runButton = document.getElementById('run-button');

// Add click event listener to execute code
runButton.addEventListener('click', runCode);

// Add event listener for changes in the editors
htmlEditor.on('change', updateOutput);
cssEditor.on('change', updateOutput);
jsEditor.on('change', updateOutput);

// Call updateOutput initially to display the initial content
updateOutput();
