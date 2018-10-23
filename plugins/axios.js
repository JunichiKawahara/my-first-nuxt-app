export default function({ $axios }) {
    $axios.onRequest((config) => {

        if (process.env.QIITA_TOKEN) {
            const authValue = 'Bearer ' + process.env.QIITA_TOKEN
            config.headers.common['Authorization'] = authValue
        }

        return config
    })
}
