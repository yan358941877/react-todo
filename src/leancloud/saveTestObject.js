import AV from 'leancloud-storage'

export default function () {
    let TestObject = AV.Object.extend('TestObject')
    var testObject = new TestObject()
    testObject.save({
        words: 'aaaaaaaaaaaaaaaaaaaaaaaaaa'
    }).then(function (object) {
        alert('leanCloud Rocks!')
    })
}
