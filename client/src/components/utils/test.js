{allUsers.map(user => (
                <p key={user._id}>
                    User.findOneAndUpdate(&#123;_id: "{user._id}"&#125;, {$push: {}})
                </p>
            ))}

            {/* {allTopics.map((topic, i) => (
                <p style={{ whiteSpace: "pre-line"}}>
                    Topic.findOneAndUpdate(
                        &#123; _id: "{topic._id}" &#125;,
                        &#123;
                            $push: &#123;
                                posts: &#123;
                                    _id: new mongoose.Types.ObjectId(),
                                    poster: new mongoose.Types.ObjectId("{topic.createdBy._id}"),
                                    body: firstPost,
                                    dateCreated: "{topic.dateCreated}",
                                    timeCreated: "{topic.timeCreated}",
                                &#125;,
                            &#125;,
                        &#125;,
                        &#123;
                            new: true,
                        &#125;
                    )
                        .then(topics =&gt; &#123;
                            console.log(topics)
                        &#125;)
                        .catch(err =&gt; console.log(err))
                </p>
            ))} */}

            {/* {allUsers.map((user, i) => (
                <p key={i} style={{ whiteSpace: "pre-line" }}>
                    &#123;
                    username: "{user.username}",
                    id: "{user._id}",
                    &#125;,
                </p>
            ))} */}

            {/* {allTopics.map(topic => (
                <p key={topic._id}>"{topic.createdBy._id}",</p>
            ))} */}

            {/* {allUsers.map((user, i) => (
                <p key={i}>"{user._id}",</p>
            ))}

            {users.map(user => (
                <p key={user.id} style={{ whiteSpace: "pre-line" }}>
                    {"//"} {user.username}
                    <br />
                    const id{user.username} = "{user.id}"<br />
                    const topics{user.username} = [
                    {filterTopics(user.id).map(topic => `"${topic._id}",`)}
                    ]<br />
                    <br />
                    User.findOneAndUpdate(
                    <br />
                    &#123; _id: id{user.username} &#125;,
                    <br />
                    &#123; $push: &#123; topics: topics{user.username} &#125;
                    &#125;,
                    <br />
                    &#123;
                    <br />
                    new: true,
                    <br />
                    &#125;
                    <br />
                    ) .then(topics =&gt; &#123;
                    <br />
                    console.log(topics)
                    <br />
                    &#125;)
                    <br />
                    .catch(err =&gt; console.log(err))
                    <br />
                </p>
            ))} */}