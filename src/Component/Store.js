import { configureStore } from "@reduxjs/toolkit"
import Slice from './Slice.js'

const Store=
configureStore({
    reducer:{obj:Slice}
})

export default Store