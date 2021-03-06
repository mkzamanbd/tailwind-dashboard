const pSidebar = new PerfectScrollbar('#sidebar-menu', {
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20,
})
pSidebar.update()
document.addEventListener('alpine:init', () => {
    Alpine.store('accordion', {
        tab: 1,
    })
    Alpine.data('accordion', idx => ({
        init() {
            this.idx = idx
        },
        idx: -1,
        handleClick() {
            this.$store.accordion.tab = this.$store.accordion.tab === this.idx ? 0 : this.idx
        },
        handleRotate() {
            return this.$store.accordion.tab === this.idx ? 'rotate-180' : ''
        },
        activeAccordion() {
            return this.$store.accordion.tab === this.idx ? 'nav-link-active' : ''
        },
        handleToggle() {
            return this.$store.accordion.tab === this.idx ? `max-height: ${this.$refs.tab.scrollHeight}px` : ''
        },
    }))
})
