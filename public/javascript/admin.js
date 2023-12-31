// insert data 
const btnSubmit = document.getElementById('btn-submit')

btnSubmit.addEventListener('click', async (e) => {

    e.preventDefault()

    const title = document.getElementById('title').value
    const imgUrl = document.getElementById('img-url').value
    const article = document.getElementById('article').value
    const smallPara = document.getElementById('small-para').value

    const token = window.localStorage.getItem('token')

    const res = await sendData(title, imgUrl, article, smallPara, token, 'insert-data')

    if (res.message === 'success') {


        document.getElementById('title').value = ''
        document.getElementById('img-url').value = ''
        document.getElementById('article').value = ''
        document.getElementById('small-para').value = ''
    }
})

// check title
const newTitle = document.getElementById('new-title')
const newArticle = document.getElementById('new-article')
const newImg = document.getElementById('new-img-url')
const oldTitle = document.getElementById('check-title')

// const btnCheck = document.getElementById('btn-check')
// btnCheck.addEventListener('click', async (e) => {

//     e.preventDefault()

//     const tit = oldTitle.value

//     const result = await sendData(tit, '', '', 'get-one-blog')
//     const img = document.getElementById('preview-img')

//     newTitle.innerText = result.blogTitle
//     img.setAttribute('src', `${result.ImgURL}`)
//     newArticle.innerText = result.BlogContent

// })

// // update data 
// const btnUpdate = document.getElementById('btn-update')
// btnUpdate.addEventListener('click', (e) => {

//     e.preventDefault()

//     const oldTitle = oldTitle.value
//     const newTitle = newTitle.value
//     const newImg = newImg.value
//     const newArticle = newArticle.value

//     console.log(newTitle, "\n", newImg, "\n", newArticle)
//     updateData(old, title, img, article, 'update-data')
// })


// function to send data
const sendData = async (title, imgUrl, article, smallPara, token, operation) => {

    try {

        const url = `http://localhost:3000/admin/${operation}`
        const blogData = { blogTitle: title, ImgURL: imgUrl, blogContent: article, smallPara: smallPara, token: token }

        const response = await fetch(url, {

            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blogData)
        })

        const res = await response.json()
        return res
    } catch (error) {

        console.log(error)
    }

}

// // update
// const updateData = async (old, title, imgUrl, article, dataType) => {

//     const url = `http://localhost:3000/admin/${dataType}`
//     blogData = { oldTitle: old, blogTitle: title, ImgURL: imgUrl, blogContent: article }
//     // console.log(blogData)

//     const response = await fetch(url, {

//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(blogData)
//     })

//     const res = await response.json()
//     const result = res.result
//     return result
// }