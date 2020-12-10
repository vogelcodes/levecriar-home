export default function Card({props}) {
    return<>
        <a key={props.id}href={props.link} className="border rounded-md w-80 mt-8 bg-cover bg-center">
            <img className="rounded-t-md object-contain" src={props.jetpack_featured_media_url}/>
                <div className="w-auto">
                  <h3 className="ml-2 text-3xl">{props.title.rendered.replace('&#8211;','-')}</h3>
                  <p>
                  {props.excerpt.rendered.replace('&#8220;','"').replace('&#8230;','...').replace('&#8221;','"').replace('&#8211;','-').slice(3,200)+'...'}
                  </p>

                </div>
          </a>
    </>
}