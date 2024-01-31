self.addEventListener('install', (a) => {
    console.log('서비스워커 설치완료')
})

self.addEventListener('activate', (a) => {
    console.log('서비스워커 동작 되고있음')
})

self.addEventListener('fetch', (a) => {
    console.log('데이터 요청시 처리')
})


self.addEventListener('message', (event) => {

    console.log('메세지', event.data)
    self.registration.showNotification('title', {
        body: event.data.message,
    })
})