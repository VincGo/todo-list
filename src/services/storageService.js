const key = 'todoapp:lists'

const StorageServices =  {
    getTodolists () {
        return JSON.parse(window.localStorage.getItem(key)) || []
    },

    saveTodolists (todoArray) {
        window.localStorage.setItem(key, JSON.stringify(todoArray))
    }
}

export default StorageServices;