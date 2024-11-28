import { getMDXData } from "app/blog/utils";
import Header from "app/components/Header";
import { CustomMDX } from "app/components/mdx";
import path from 'path'

const resourceMdx = getMDXData(path.join(process.cwd(), 'app', 'resources'))[0]

const Resources = () => (
  <section>
    <Header>resources</Header>
    <article className="prose">
      <CustomMDX source={resourceMdx.content} />
    </article>
  </section>
)
  
export default Resources