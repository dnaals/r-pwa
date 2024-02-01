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

    const option = {
        body: event.data.message,
        icon: './img/img1.png',        //제목옆에 아이콘
        image: './img/img2.png',       //내용에 대한 썸네일
        badge: './img/img3.png',
        vibrate: [200, 100, 300],
        actions: [
            { action: 'open', title: '자세히보기' },
            { action: 'close', title: '닫기' }
        ]
    }

    self.registration.showNotification('title', option);
})


self.addEventListener('notificationclick', (event) => {
    event.waitUntil(
        self.clients.matchAll().then(function (clientList) {
            if (event.action == 'open') {
                return self.clients.openWindow('https://naver.com');
            } else if (event.action == 'close') {
                return event.notification.close();
            }
        })
    )
})