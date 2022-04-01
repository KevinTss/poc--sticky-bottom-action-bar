import { useState } from 'react'
import './App.css'

const TEXT = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias perspiciatis cupiditate nesciunt exercitationem recusandae, consequatur tenetur? Praesentium voluptatem, officia voluptatum et iusto qui, amet accusamus doloribus, atque adipisci vero provident?
Odit magni recusandae quam ex! Culpa distinctio officia voluptatem est deserunt in mollitia saepe tempore cumque minus, non beatae pariatur facere voluptatibus autem, reprehenderit dolor architecto placeat ratione repellat doloribus!
Impedit enim excepturi mollitia quas nesciunt. Doloremque esse amet at, enim aspernatur quisquam tempora, dolor quas quod quam rem modi culpa perferendis fuga nulla odit impedit accusamus repudiandae voluptate non.
Adipisci provident, illum expedita facere sint eligendi officia aspernatur cupiditate voluptatibus incidunt consequatur amet numquam dolor veritatis porro debitis eius vitae magnam modi perferendis fuga nam rem iste! Cumque, nostrum.
Nesciunt, dolores quaerat consectetur harum aspernatur quisquam impedit suscipit quod, exercitationem nisi porro soluta quo eligendi officiis totam facilis culpa magni saepe aut sint ad, voluptate voluptatem. Mollitia, odit inventore.
Veniam excepturi quidem enim quam iste debitis ipsum voluptate, obcaecati eveniet totam numquam cupiditate at sapiente ut neque eum ducimus autem perspiciatis nostrum? Expedita ipsam tenetur pariatur explicabo in voluptatem!
Iure magni nesciunt ab sit at. Illo est fuga non consectetur molestiae dolor eveniet. Illo, amet error, mollitia nihil unde, magnam nulla quo perferendis quaerat sit quisquam ducimus consequatur magni!
Corporis ab accusantium et ad? Inventore sequi, dolorem laborum dolore voluptatibus commodi eligendi incidunt officia enim nobis, labore aut officiis nemo quia possimus dolores consectetur voluptatem iste ad et temporibus.
Quisquam necessitatibus maxime consectetur cumque fugiat natus, non eaque esse deserunt labore cum, accusamus atque ut quod provident ipsa nulla accusantium quidem eos hic excepturi rem dolores distinctio corporis? Repudiandae.
Numquam velit eos optio, aliquid nihil, perferendis vero harum repellendus eius praesentium maxime est. Error inventore ipsa officiis dolores corporis modi totam exercitationem unde, harum nisi repudiandae voluptatibus vel nihil!
Optio minima veritatis perspiciatis magnam reiciendis commodi nihil repellendus rerum iure enim similique reprehenderit ducimus deleniti ullam consequuntur error quos ipsum suscipit repellat nemo, nostrum rem dolores nobis harum. Adipisci.
At consectetur ducimus sed possimus cum voluptate non rerum amet nam! Vero, temporibus consectetur fuga dolorem, sequi excepturi eveniet illo ipsa dignissimos, nemo porro quos voluptatum blanditiis amet pariatur repellendus!
Odio doloribus vero, quasi, labore dolore impedit quo animi nam soluta ipsam placeat? Nemo totam repellat ea beatae illum eos dicta, facilis temporibus aliquam optio sit eius at sequi id.
Odio aperiam totam vitae quidem tempore perspiciatis similique expedita, rerum ut enim numquam consequuntur itaque! Praesentium libero quibusdam tempora in? Similique porro beatae aut sapiente ex iure quidem natus temporibus.
Ut velit pariatur esse temporibus quas magni, iusto inventore dolore ratione nihil animi est itaque harum rem dolor corrupti quis accusamus maiores dignissimos cum deserunt consequuntur illo! Vitae, id aspernatur.
Nam corrupti, quam quasi earum maiores placeat omnis suscipit voluptatem a pariatur odit aperiam, libero tenetur ipsa cumque inventore sint exercitationem numquam praesentium! Voluptatum omnis, nisi blanditiis aliquid nostrum maxime!
Ipsum, saepe, praesentium aut nihil excepturi modi reiciendis autem expedita rem nisi perspiciatis alias aspernatur provident vel sint blanditiis aliquam! Suscipit dolorum praesentium vel magnam soluta voluptatum aspernatur molestias atque.
Porro consectetur, sint ab consequuntur perspiciatis asperiores tempora. Nihil, quia! Consequuntur at temporibus dolorem autem doloremque, inventore molestias. At molestias saepe quidem obcaecati ipsum commodi magni vero eius similique laborum.
Quaerat nihil ut at repudiandae inventore numquam assumenda aperiam suscipit, quisquam est beatae maxime dolor minus, sed incidunt quasi autem quae aspernatur reprehenderit! Commodi cum provident nam eos velit magni!
Obcaecati necessitatibus optio repellat officia illum, odio deleniti! Eveniet aperiam labore facilis dolore, sed impedit? Saepe necessitatibus similique quidem quae reiciendis culpa maiores, porro, vitae dicta quaerat earum reprehenderit voluptate!
Ab consequatur, eaque, ratione nostrum eos alias earum accusantium excepturi rerum ea voluptas qui, quos vel voluptatem facilis quasi voluptatibus. Quidem quas facilis vero aperiam labore quaerat, cupiditate id consectetur.
Deleniti animi exercitationem quisquam, officia sequi doloribus dolor? Laudantium quibusdam quisquam voluptas dolorum, hic veniam quod mollitia architecto dicta consectetur quas adipisci nihil aliquid beatae assumenda! Beatae facilis harum in.
Laudantium dolores amet, labore quasi earum explicabo atque assumenda, veniam iste nulla minima ducimus nam dolorum fuga error praesentium fugit, et facilis quisquam optio ex est pariatur? Maiores, ad voluptas!
Illo numquam similique labore reprehenderit expedita odio dolorum eius amet, nulla quibusdam magni excepturi doloribus fugit quo exercitationem nobis veniam corporis modi quae nesciunt adipisci ratione! Molestias voluptatum consequatur doloribus!
Cumque commodi quos, eum labore repellendus laborum magni quo animi id? Odit sapiente perspiciatis blanditiis dolor ipsa ratione corrupti optio minima illo voluptate, velit totam at doloribus doloremque molestias! Aperiam!
Nulla rem qui optio repellendus perspiciatis ad? Vel, debitis minus, in porro nemo saepe molestias delectus, facilis adipisci voluptatem perspiciatis quia recusandae. Nostrum consectetur sit cupiditate a quia necessitatibus aperiam.
Illum provident, nostrum temporibus esse nemo repudiandae corrupti expedita harum veritatis culpa dolor praesentium iure aperiam, eius voluptate similique ullam. Laborum dolores doloremque molestiae reiciendis repudiandae! Rerum recusandae aliquam deleniti!
A delectus nesciunt iusto officiis doloribus omnis, ea exercitationem alias maiores at dolor, autem, perspiciatis quas ipsum nemo. Ab temporibus eligendi maxime. Eaque laudantium velit provident quia totam, libero culpa?
Placeat provident harum temporibus dolore repellendus quis sapiente commodi suscipit maxime asperiores! Facere quae totam cumque explicabo. Odit temporibus sit quod ab facere, nesciunt officia voluptates error delectus non reiciendis.
Deleniti neque labore quidem maxime officiis ratione blanditiis dolores molestiae, aperiam iusto tempore sapiente maiores ab est cupiditate debitis quo voluptatibus facilis reprehenderit nobis aliquam aut quod sed? Explicabo, expedita.
Blanditiis unde sint praesentium, ratione maiores, molestiae asperiores atque eum ab debitis amet dolores sit qui similique facere veniam, iure at quae consequuntur corrupti rem a magnam explicabo. Veniam, inventore.
Nihil ipsum accusamus ratione nam? Expedita voluptate debitis ducimus quia rerum suscipit ullam at minima aliquid. Culpa soluta nulla, vero doloribus, eum quam quasi quaerat delectus cum, pariatur labore voluptate.
Quod vel odit harum officiis id, atque inventore autem nihil dolores. Molestias rerum incidunt impedit. Ad ipsam eum nam non recusandae corporis repellendus aspernatur, fugiat laudantium a voluptatum quasi maiores.
Possimus ipsa nostrum modi illum? Sed nulla pariatur, fuga id quos laborum rerum commodi dolorum facilis quae et, vel quaerat error, neque placeat dolores dolore quasi a deserunt itaque alias!
Est id a earum molestiae harum fugit, consectetur ab ratione impedit, labore nihil culpa recusandae ut reprehenderit. Officiis aliquam iusto est modi maiores iure, amet ex veritatis repellat. Harum, tenetur.
Pariatur, sapiente corporis velit quis harum fugiat aut adipisci voluptas ab, nemo ratione. Maiores deserunt molestiae voluptas ex vel, nisi, reiciendis eveniet vitae hic maxime ducimus distinctio obcaecati optio debitis?
Quibusdam architecto voluptas non eveniet rem enim adipisci exercitationem, atque natus alias excepturi, laboriosam, blanditiis voluptatum dolorem? Sunt, rerum voluptatibus beatae aliquam ab quidem inventore repudiandae est facere. Repellat, incidunt!
Expedita sunt distinctio quod tempora? Dolorem iure veritatis nemo quaerat animi, totam ratione vel molestias at magnam velit laudantium quibusdam cupiditate, dicta est? Iure minima doloremque assumenda, illum corporis harum.
Aliquid, laudantium rerum? Quasi, rem debitis, ex a perspiciatis aliquam, est eum accusantium recusandae placeat consequuntur magnam laboriosam architecto. Exercitationem vitae aspernatur corporis perspiciatis non. Maxime magnam excepturi asperiores minus.
Doloremque impedit, earum consequuntur repellendus ullam ipsa? Impedit explicabo voluptate fuga debitis nulla assumenda quas ab quod quam animi veniam aut architecto, expedita autem labore velit, similique, tempora ipsam soluta.
Et quas minus fuga, deleniti corporis nobis voluptatum! Magni voluptatum quaerat placeat aliquid? Temporibus voluptate, natus necessitatibus asperiores officiis, sint incidunt alias magni placeat et qui odio quaerat praesentium eveniet!
Blanditiis nesciunt distinctio iste eius assumenda aut earum, ratione, dolore nemo voluptates fuga ipsa maiores tempora similique quis sed maxime quidem quaerat, saepe exercitationem ad architecto repudiandae? Impedit, quia illum.
Facere dolor quas modi exercitationem officiis quo aperiam, nisi labore molestias non, eius beatae itaque nihil autem dolores magni dolore maiores enim aliquam laudantium molestiae! Architecto doloremque doloribus aliquam cumque?
Voluptates sapiente voluptatibus culpa sequi dolorum. Praesentium earum, nam quisquam quaerat aperiam molestiae non officia tempore, corrupti nisi fuga neque quas? Accusamus itaque assumenda ad, quidem quam pariatur! Ab, sequi.
Praesentium numquam nesciunt magnam. Porro, perferendis unde. Magni iure assumenda laborum dolor ducimus nesciunt modi possimus quidem totam voluptates, unde optio obcaecati animi sapiente quis eius quasi corporis repellendus fugit!
Eos officia impedit ratione sint totam, natus dolorum fuga libero unde quaerat? Dolorum recusandae nihil enim optio, similique natus dolore ipsa exercitationem. Omnis eos, neque blanditiis in quaerat alias et!
Earum cum itaque sed nesciunt aperiam tempore ab nihil quos ratione aliquid minima debitis, laudantium inventore sunt eos doloribus officia unde at! Aspernatur cum facilis modi debitis quas sit officiis?
Pariatur nisi, minima omnis non facilis odit a, accusantium dignissimos veniam temporibus vero nostrum neque nobis laboriosam est sit, obcaecati quibusdam? Voluptatum reiciendis natus blanditiis delectus! Consectetur consequuntur eveniet magni.
Maxime officia inventore aut magnam tenetur, unde repellendus incidunt. Pariatur obcaecati eveniet saepe placeat iure, rerum aperiam magni maxime ipsa officiis nihil a et eos perspiciatis doloribus nobis totam quidem?
Consequuntur fugiat quod impedit. Necessitatibus magnam velit ex inventore dolor animi accusamus autem? Cum qui nam ad doloremque, totam, voluptatum laboriosam laudantium dolorum dolor dignissimos omnis rem, ex nulla harum!
Ducimus eius, quia distinctio assumenda recusandae, eum magni fuga reprehenderit, iste in adipisci optio. Unde nostrum corrupti sequi officiis dicta qui dolorem aliquam a? Sit veniam itaque molestiae sed quaerat.
Saepe qui voluptatum in dolores. Sequi maiores facere saepe harum dolor! Sed labore nam iste ea quidem consectetur laborum incidunt culpa quam aliquid debitis neque, sint eaque error, ducimus soluta?
Minus, officia doloremque explicabo et iusto delectus mollitia facere architecto, a dolorum autem sit dicta voluptatem animi praesentium beatae quo consequuntur expedita distinctio vitae earum sapiente? Cupiditate, perferendis eos. Suscipit.
Itaque deleniti asperiores aliquid saepe explicabo aspernatur et, magnam odio amet. Ab reprehenderit commodi cum ipsum dignissimos quidem autem, ipsa aliquam velit totam dolorem. Ratione voluptatibus quibusdam voluptas magnam consequatur.
Assumenda consequuntur beatae numquam, voluptas sequi labore fuga nam inventore neque itaque aspernatur velit facere possimus nostrum ad excepturi maiores ipsum error, iure est harum? Facilis sit deleniti molestiae accusamus.
Nisi hic ad, sit corporis, itaque mollitia beatae vel nobis, doloremque obcaecati maiores! Nulla, doloremque officia ratione, vero illo corrupti illum explicabo deserunt rerum repudiandae incidunt adipisci similique consequuntur rem!
Dolores earum quae sunt non laboriosam minima illum magnam, tempore, quod aliquam nemo recusandae quidem blanditiis nulla facilis repudiandae et est error quos quo veritatis ea libero eum aliquid. Architecto?
Quidem esse praesentium autem totam, ducimus recusandae porro! Veniam beatae ea dignissimos voluptatem, dolore asperiores adipisci rerum exercitationem et facere ratione! Cum accusamus inventore nostrum numquam, sunt consectetur minus enim!
Mollitia, possimus. Voluptate temporibus ullam, saepe odit dolore pariatur beatae dolorum eaque architecto, asperiores aliquam doloribus, incidunt rem aliquid molestiae hic corporis voluptatem enim rerum ut! Voluptatum temporibus odio soluta?
Dolorum rerum fugiat deleniti perspiciatis id tenetur laborum amet similique magni, eligendi ea? Est, praesentium rem! Natus, magnam? Quam libero dignissimos necessitatibus esse voluptatum velit aspernatur veniam minus hic at.
Inventore est praesentium earum maiores tenetur provident eos voluptatibus iure commodi cumque facere quos magnam minus suscipit voluptatum, repellat, adipisci eaque quod fugiat. Officiis vero soluta, inventore facilis repellendus eum.
Culpa, accusamus amet eveniet, exercitationem aliquid, expedita corrupti porro a repellat aperiam illum? Nostrum rem fuga mollitia nemo at vero numquam architecto laborum, ad nulla assumenda eveniet asperiores. Sit, architecto?
Totam officiis ad voluptas possimus nihil eius ipsa rerum numquam nemo hic neque assumenda aliquid, blanditiis repellat beatae aut quas minima explicabo qui a ullam. Explicabo eveniet ratione laborum! Quo?
Ex dolores quibusdam est quisquam, praesentium illo incidunt quae libero fugiat asperiores cupiditate totam aperiam ab architecto provident ipsa inventore nobis ipsam sit perferendis? Dolore dignissimos necessitatibus suscipit iusto asperiores.
Minus, hic repudiandae labore assumenda, itaque perspiciatis velit incidunt, vero ducimus porro voluptas et eaque reiciendis eos consequuntur magnam dolorem? Ad quae assumenda enim necessitatibus et, aut fugiat nemo. Deleniti.
Natus iure quos, qui expedita corporis architecto repudiandae. Voluptatem recusandae, perspiciatis unde quisquam aut ad. Quis accusantium ab impedit, laboriosam dolor, ullam ducimus eos vero qui rerum explicabo doloremque repellendus!
Dolor eaque nam magnam asperiores saepe ex sint sapiente officiis cum totam, laborum reiciendis necessitatibus ducimus quo deserunt repudiandae officia! Fuga expedita consequatur accusantium. Quidem totam omnis qui ducimus alias?
At ut eaque exercitationem et libero aliquam, eius tempore alias cupiditate aperiam provident minima expedita. Minima tempora corrupti, ab dicta amet repudiandae enim cumque, vel nihil eaque dolore, saepe laborum.
Sunt iure totam officiis numquam inventore, sequi earum vero atque! Explicabo, voluptatem, recusandae doloribus atque, voluptatum aspernatur tempore eaque modi id dolorem odio? Minima ullam perspiciatis voluptatem quod eaque sint!
Odio reprehenderit corporis cupiditate necessitatibus, libero neque quaerat, eos at officia aliquid veritatis! Exercitationem natus rerum tenetur deserunt et fugit ex culpa harum delectus ipsa, non hic velit. Hic, excepturi!
Amet soluta voluptate exercitationem excepturi molestiae corporis itaque, facere ut perspiciatis deleniti nostrum reiciendis assumenda error eaque, sunt, unde fugit molestias sit hic. Laboriosam incidunt eaque velit sapiente at explicabo?
Cupiditate minima officiis repellat ipsum quos amet maxime quod, laudantium, doloremque rem dolor culpa voluptatibus quam. Suscipit deserunt repellendus fugit, recusandae porro odio expedita quaerat ut illum, fuga eum rem.
Provident culpa temporibus quos asperiores unde magni voluptatibus debitis, tempore eveniet possimus sit ex consequatur tenetur laborum omnis velit qui nemo animi ipsum soluta. Sunt molestias atque similique aliquam delectus.
Iure, odio error earum et iste commodi delectus nihil tempora, enim consequatur, expedita tenetur sunt repudiandae assumenda beatae quidem quis magni laudantium quibusdam hic itaque dignissimos ipsam! Obcaecati, ad atque.
Odio fuga aperiam porro eius similique nisi earum rem recusandae quasi et vel hic perspiciatis voluptate, perferendis soluta. Iste labore aliquid alias sapiente exercitationem ex numquam, ducimus eligendi voluptates cum?
Optio quis ipsa vitae minus beatae aperiam iusto. Dicta accusantium eos ut amet culpa magnam quod, beatae enim totam itaque. Veniam obcaecati aut quaerat, asperiores aliquam eaque voluptatibus fugiat illo!
Sequi obcaecati fuga quisquam error delectus facere exercitationem impedit, neque nulla eos voluptate, optio quas? Placeat animi, dolor error iusto eum consequuntur maxime. Sit quasi recusandae dicta? Deleniti, sunt autem!
Veniam impedit doloremque id autem modi, sequi labore ipsum asperiores magni excepturi repellendus expedita eveniet non veritatis porro inventore aspernatur rem dolore quos vero alias exercitationem ipsam praesentium. At, eaque.
Distinctio accusantium provident est dolor fugiat vel dolores aperiam! Veniam ut, repellat expedita harum temporibus deleniti libero rerum, nisi vitae illum pariatur doloremque beatae nulla similique aliquam velit illo iste.
Deserunt tempore blanditiis qui vel reprehenderit quasi optio excepturi placeat commodi suscipit, maiores facere, corporis dolorum, quisquam sapiente veniam sequi magnam mollitia omnis quis maxime molestiae a eius. Ipsam, ipsa.
Vitae architecto quos eius maxime aliquam pariatur repudiandae repellendus, rem molestiae aspernatur voluptate accusantium deleniti asperiores error ea impedit sequi? Illo officiis voluptatibus a incidunt ullam in! Ratione, exercitationem enim!
Nemo, facilis modi, dolorum, animi fugit incidunt dolor iusto soluta cupiditate sunt id quas laboriosam possimus alias nulla. Itaque obcaecati ipsa laboriosam harum ea. Voluptate officia unde ducimus nihil optio.
Quod pariatur minima nostrum amet dolores aspernatur. Accusamus libero, odio sed distinctio voluptatibus officia facilis! Odit aliquid tempore possimus molestiae totam provident id nihil sit, autem expedita, dolore consequuntur error?
Necessitatibus, ad sequi. Consequatur incidunt tempora quidem quis nesciunt! Omnis accusantium soluta minus nesciunt suscipit eum facere repellendus quam natus, labore rem, nihil fugiat doloribus. Ipsum deleniti ratione corrupti unde.
Consectetur dolor natus veritatis numquam culpa nemo quae harum voluptatibus eaque laboriosam explicabo nobis repellendus blanditiis atque adipisci est iusto doloribus nostrum, ea pariatur reprehenderit quo quos. Ab, sunt facilis!
Temporibus dolor minus sapiente dolore quisquam modi ipsum vitae dolorem veritatis eligendi ut libero quaerat, assumenda mollitia laboriosam accusamus aperiam error, facilis id expedita alias at, voluptas distinctio? Dolor, eos.
Nulla ut iure possimus esse ipsa? Reprehenderit natus fugiat pariatur minima eum earum accusamus, magnam nihil repellat vel dolor error laudantium quam illo animi at suscipit quos omnis atque cumque.
Modi ipsum aliquam reprehenderit, dolorum aliquid voluptatibus recusandae pariatur voluptas cupiditate officiis. Veritatis asperiores ipsum adipisci sit, tenetur ea delectus non dolores doloribus pariatur accusamus repellat nobis, soluta, dolorum vitae.
Dolore incidunt quis officia tempore debitis. Facilis perspiciatis eveniet corporis voluptatum officiis in assumenda autem architecto beatae eligendi inventore obcaecati laudantium animi neque quisquam, quia quaerat ut porro asperiores quis?
Velit quam, aperiam commodi culpa voluptatem dignissimos possimus, placeat suscipit impedit consequatur, perferendis earum provident dicta dolorem! Minima adipisci aut neque sint itaque perspiciatis voluptates rerum deleniti, rem vitae recusandae?
Laboriosam, totam! Nesciunt ab aperiam molestiae hic? Animi sit recusandae iste consectetur qui error iusto eaque, soluta perspiciatis officia iure voluptas aspernatur consequatur officiis blanditiis debitis. Id totam ut vero.
Harum quisquam praesentium eum non quos iste illum itaque soluta sunt veritatis dolorum veniam atque beatae exercitationem, doloremque eaque libero suscipit, aut sequi vel hic voluptates tenetur vero. Voluptas, reprehenderit.
Explicabo consequuntur harum sed delectus dignissimos numquam omnis, amet earum qui neque voluptas laboriosam deserunt impedit cupiditate ab voluptatem laudantium error officia ratione culpa necessitatibus. Sed quisquam quas unde iusto.
Sapiente soluta beatae non qui pariatur, velit quidem numquam repudiandae, esse repellat, unde quam quisquam! Id officia dolores dolorum cum, veniam debitis minima quod est nemo, suscipit hic asperiores earum!
Alias soluta ab fugiat saepe suscipit nostrum facere ducimus odio dolore eius. Omnis, expedita! Quod aliquid mollitia vitae, at optio ullam neque saepe! Tempore, fuga eum voluptas sit exercitationem alias!
Nisi quas exercitationem culpa dignissimos quam voluptatibus laborum tempore sunt ducimus illum corrupti temporibus vitae molestiae alias ipsa, iusto incidunt. Omnis neque quidem quibusdam illo quod debitis praesentium iure nobis!
Eos sint id expedita. Iste architecto libero fugiat corporis numquam amet reprehenderit esse porro aliquid quibusdam? Quia expedita atque, repellendus velit tempore unde blanditiis distinctio mollitia, vero nostrum, debitis repellat!
Amet ipsa, excepturi est sunt asperiores ratione labore hic voluptatum facere, dignissimos quae dolores ab placeat saepe, laudantium dolor at ex pariatur qui veniam! Veritatis in tenetur aliquid laboriosam adipisci?
Possimus illo, commodi laboriosam tempora dolores facilis atque, eveniet dolorem soluta aliquid ea voluptatum inventore amet obcaecati. Debitis eius nulla nihil. Eligendi exercitationem autem tempora impedit delectus numquam, cumque sint!
Optio quasi dolore incidunt assumenda doloremque architecto animi quaerat facere tempora, repellendus harum ut nam suscipit nemo eius perferendis voluptas consequatur consequuntur beatae quia maiores amet? Nihil quas officia ad!`

function App() {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <div className="App">
      <textarea onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)}>{TEXT}</textarea>
      {isFocus && <div className='actions'>
        test</div>}
    </div>
  )
}

export default App
