import kotlin.browser.document

fun main() {
    val jokesPresenter = JokesPresenter()
    val jokesPage = JokesPage(jokesPresenter)
    jokesPresenter.attach(jokesPage)
}