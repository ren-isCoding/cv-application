import React from "react"
import Education from "./Education"
import Experience from "./Experience"

export default function MainInfo({ personal }) {
    const { desc } = personal
    const lorem =
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae vitae architecto iusto nisi dignissimos, voluptatem repellendus molestias facere dolor tempore earum sequi quia explicabo recusandae quibusdam consequuntur quam perferendis qui. Saepe corporis vel perferendis voluptas! Aspernatur, quae numquam recusandae iusto voluptas, expedita labore, beatae obcaecati ea esse officiis sequi reprehenderit?"
    return (
        <div className="main-info-section">
            <section>
                <h3>Description</h3>
                <div className="info-desc">{desc ? desc : lorem}</div>
            </section>
            <Education />
            <Experience />
        </div>
    )
}
