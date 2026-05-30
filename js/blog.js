document.addEventListener("DOMContentLoaded", async () => {

    const container = document.getElementById("blog-posts");

    try {

        const response = await fetch("/data-files/blog-posts.json");
        const posts = await response.json();

        posts.forEach(post => {

            container.innerHTML += `
                <div class="col-md-4">
                    <article class="card card-blog h-100">

                        <div class="card-body">

                            <small class="text-muted">
                                ${post.date}
                            </small>

                            <h5 class="mt-2">
                                ${post.title}
                            </h5>

                            <p>
                                ${post.summary}
                            </p>

                            <div class="collapse"
                                 id="post${post.id}">

                                <p>
                                    ${post.content}
                                </p>

                            </div>

                            <button
                                class="btn btn-dark btn-sm toggle-btn"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#post${post.id}">
                                Read More
                            </button>

                        </div>

                    </article>
                </div>
            `;
        });

        document.querySelectorAll('.toggle-btn')
            .forEach(button => {

                const target =
                    document.querySelector(
                        button.dataset.bsTarget
                    );

                target.addEventListener(
                    'shown.bs.collapse',
                    () => button.textContent = 'Read Less'
                );

                target.addEventListener(
                    'hidden.bs.collapse',
                    () => button.textContent = 'Read More'
                );
            });

    } catch(error) {

        container.innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger">
                    Unable to load blog posts.
                </div>
            </div>
        `;

        console.error(error);
    }

});