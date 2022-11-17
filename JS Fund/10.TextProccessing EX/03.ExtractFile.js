function extract(pathway)
{
    let splitArr = pathway.split('\\');
    let file = splitArr.pop();

    let lastDot = file.lastIndexOf('.');
    let fileName = file.substring(0,lastDot);
    let fileExtension = file.substring(lastDot + 1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extract('C:\\Internal\\training-internal\\Template.pptx')