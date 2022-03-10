function extractDomainName(url){
    url = url.replace("http://", "")
    url = url.replace("https://", "")
    url = url.replace("www.", "")
    url = url.replace("docs.", "")

    return url.split(".")[0]
}

console.log(extractDomainName("http://github.com/subagyo/project-mantab"))
console.log(extractDomainName("https://www.youtube.com/watch?v=YBgWLxbrwMgb"))
console.log(extractDomainName("http://https://docs.google.com/document/d/1sx4N0ISPfZqHnK-1cTUDoE-5Wrmz28ShoY"))