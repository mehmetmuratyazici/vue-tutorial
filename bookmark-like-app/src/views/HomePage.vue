<template>
    <app-header/>
    <h2>Home Page</h2>
    <SideMenu/>
    <BookmarkList/>
</template>

<script>
import BookmarkList from '@/components/home/BookmarkList'
import SideMenu from '@/components/home/childs/SideMenu'
export default {
    components : {
        BookmarkList,
        SideMenu,
    }
}
</script>