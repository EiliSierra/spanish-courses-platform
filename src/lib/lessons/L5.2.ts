import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Imperfect Subjunctive -ra (12) ===
  { spanish: 'Quisiera un café, por favor', english: 'I would like a coffee, please', pronunciation: 'kee-see-EH-rah oon kah-FEH pohr fah-BOHR', category: 'imperfect-subjunctive-ra', audio: 'quisiera-un-cafe' },
  { spanish: 'Si pudiera volar, iría a las nubes', english: 'If I could fly, I would go to the clouds', pronunciation: 'see poo-dee-EH-rah boh-LAHR ee-REE-ah ah lahs NOO-behs', category: 'imperfect-subjunctive-ra', audio: 'si-pudiera-volar' },
  { spanish: 'Si tuviera más tiempo, leería más libros', english: 'If I had more time, I would read more books', pronunciation: 'see too-bee-EH-rah mahs tee-EHM-poh leh-eh-REE-ah mahs LEE-brohs', category: 'imperfect-subjunctive-ra', audio: 'si-tuviera-mas-tiempo' },
  { spanish: 'Si fuera posible, cambiaría el pasado', english: 'If it were possible, I would change the past', pronunciation: 'see foo-EH-rah poh-SEE-bleh kahm-bee-ah-REE-ah ehl pah-SAH-doh', category: 'imperfect-subjunctive-ra', audio: 'si-fuera-posible' },
  { spanish: 'Si hablara mejor, me entenderían', english: 'If I spoke better, they would understand me', pronunciation: 'see ah-BLAH-rah meh-HOHR meh ehn-tehn-deh-REE-ahn', category: 'imperfect-subjunctive-ra', audio: 'si-hablara-mejor' },
  { spanish: 'Si comiera menos, estaría más sano', english: 'If I ate less, I would be healthier', pronunciation: 'see koh-mee-EH-rah MEH-nohs ehs-tah-REE-ah mahs SAH-noh', category: 'imperfect-subjunctive-ra', audio: 'si-comiera-menos' },
  { spanish: 'Si viviera en España, aprendería flamenco', english: 'If I lived in Spain, I would learn flamenco', pronunciation: 'see bee-bee-EH-rah ehn ehs-PAH-nyah ah-prehn-deh-REE-ah flah-MEHN-koh', category: 'imperfect-subjunctive-ra', audio: 'si-viviera-en-espana' },
  { spanish: 'Si supiera la respuesta, te la diría', english: 'If I knew the answer, I would tell you', pronunciation: 'see soo-pee-EH-rah lah rehs-PWEHS-tah teh lah dee-REE-ah', category: 'imperfect-subjunctive-ra', audio: 'si-supiera-la-respuesta' },
  { spanish: 'Esperaba que llegaran a tiempo', english: 'I was hoping they would arrive on time', pronunciation: 'ehs-peh-RAH-bah keh yeh-GAH-rahn ah tee-EHM-poh', category: 'imperfect-subjunctive-ra', audio: 'esperaba-que-llegaran' },
  { spanish: 'Era necesario que estudiara más', english: 'It was necessary that I study more', pronunciation: 'EH-rah neh-seh-SAH-ree-oh keh ehs-too-dee-AH-rah mahs', category: 'imperfect-subjunctive-ra', audio: 'era-necesario-que-estudiara' },
  { spanish: 'Le pedí que me ayudara', english: 'I asked him/her to help me', pronunciation: 'leh peh-DEE keh meh ah-yoo-DAH-rah', category: 'imperfect-subjunctive-ra', audio: 'le-pedi-que-me-ayudara' },
  { spanish: 'Quería que fuéramos juntos', english: 'I wanted us to go together', pronunciation: 'keh-REE-ah keh foo-EH-rah-mohs HOON-tohs', category: 'imperfect-subjunctive-ra', audio: 'queria-que-fueramos-juntos' },

  // === Imperfect Subjunctive -se (10) ===
  { spanish: 'Quisiese un momento de paz', english: 'I would wish for a moment of peace', pronunciation: 'kee-see-EH-seh oon moh-MEHN-toh deh pahs', category: 'imperfect-subjunctive-se', audio: 'quisiese-un-momento-de-paz' },
  { spanish: 'Si pudiese elegir, viviría aquí', english: 'If I could choose, I would live here', pronunciation: 'see poo-dee-EH-seh eh-leh-HEER bee-bee-REE-ah ah-KEE', category: 'imperfect-subjunctive-se', audio: 'si-pudiese-elegir' },
  { spanish: 'Si tuviese dinero, compraría esa casa', english: 'If I had money, I would buy that house', pronunciation: 'see too-bee-EH-seh dee-NEH-roh kohm-prah-REE-ah EH-sah KAH-sah', category: 'imperfect-subjunctive-se', audio: 'si-tuviese-dinero' },
  { spanish: 'Si fuese necesario, lo haría de nuevo', english: 'If it were necessary, I would do it again', pronunciation: 'see foo-EH-seh neh-seh-SAH-ree-oh loh ah-REE-ah deh NWEH-boh', category: 'imperfect-subjunctive-se', audio: 'si-fuese-necesario' },
  { spanish: 'Si hablase francés, trabajaría en París', english: 'If I spoke French, I would work in Paris', pronunciation: 'see ah-BLAH-seh frahn-SEHS trah-bah-hah-REE-ah ehn pah-REES', category: 'imperfect-subjunctive-se', audio: 'si-hablase-frances' },
  { spanish: 'Si comiese antes, no tendría hambre', english: 'If I ate earlier, I would not be hungry', pronunciation: 'see koh-mee-EH-seh AHN-tehs noh tehn-DREE-ah AHM-breh', category: 'imperfect-subjunctive-se', audio: 'si-comiese-antes' },
  { spanish: 'Si viviese en el campo, estaría más tranquilo', english: 'If I lived in the countryside, I would be calmer', pronunciation: 'see bee-bee-EH-seh ehn ehl KAHM-poh ehs-tah-REE-ah mahs trahn-KEE-loh', category: 'imperfect-subjunctive-se', audio: 'si-viviese-en-el-campo' },
  { spanish: 'Si supiese la verdad, no callaría', english: 'If I knew the truth, I would not stay silent', pronunciation: 'see soo-pee-EH-seh lah behr-DAHD noh kah-yah-REE-ah', category: 'imperfect-subjunctive-se', audio: 'si-supiese-la-verdad' },
  { spanish: 'Era importante que lo supiese', english: 'It was important that he/she know it', pronunciation: 'EH-rah eem-pohr-TAHN-teh keh loh soo-pee-EH-seh', category: 'imperfect-subjunctive-se', audio: 'era-importante-que-lo-supiese' },
  { spanish: 'Dudaba que viniese a la fiesta', english: 'I doubted that he/she would come to the party', pronunciation: 'doo-DAH-bah keh bee-nee-EH-seh ah lah fee-EHS-tah', category: 'imperfect-subjunctive-se', audio: 'dudaba-que-viniese' },

  // === Pluperfect Subjunctive (12) ===
  { spanish: 'Si hubiera sabido, habría venido antes', english: 'If I had known, I would have come earlier', pronunciation: 'see oo-bee-EH-rah sah-BEE-doh ah-BREE-ah beh-NEE-doh AHN-tehs', category: 'pluperfect-subjunctive', audio: 'si-hubiera-sabido' },
  { spanish: 'Si hubiera estudiado más, habría aprobado', english: 'If I had studied more, I would have passed', pronunciation: 'see oo-bee-EH-rah ehs-too-dee-AH-doh mahs ah-BREE-ah ah-proh-BAH-doh', category: 'pluperfect-subjunctive', audio: 'si-hubiera-estudiado-mas' },
  { spanish: 'Ojalá hubiera viajado a Japón', english: 'I wish I had traveled to Japan', pronunciation: 'oh-hah-LAH oo-bee-EH-rah bee-ah-HAH-doh ah hah-POHN', category: 'pluperfect-subjunctive', audio: 'ojala-hubiera-viajado' },
  { spanish: 'Si hubiéramos llegado antes, habríamos visto el concierto', english: 'If we had arrived earlier, we would have seen the concert', pronunciation: 'see oo-bee-EH-rah-mohs yeh-GAH-doh AHN-tehs ah-BREE-ah-mohs BEES-toh ehl kohn-see-EHR-toh', category: 'pluperfect-subjunctive', audio: 'si-hubieramos-llegado-antes' },
  { spanish: 'Si no hubiera llovido, habríamos ido al parque', english: 'If it had not rained, we would have gone to the park', pronunciation: 'see noh oo-bee-EH-rah yoh-BEE-doh ah-BREE-ah-mohs EE-doh ahl PAHR-keh', category: 'pluperfect-subjunctive', audio: 'si-no-hubiera-llovido' },
  { spanish: 'Si hubieran escuchado, habrían entendido', english: 'If they had listened, they would have understood', pronunciation: 'see oo-bee-EH-rahn ehs-koo-CHAH-doh ah-BREE-ahn ehn-tehn-DEE-doh', category: 'pluperfect-subjunctive', audio: 'si-hubieran-escuchado' },
  { spanish: 'Me habría gustado que hubieras venido', english: 'I would have liked you to have come', pronunciation: 'meh ah-BREE-ah goos-TAH-doh keh oo-bee-EH-rahs beh-NEE-doh', category: 'pluperfect-subjunctive', audio: 'me-habria-gustado-que-hubieras' },
  { spanish: 'Si hubiese tenido dinero, habría comprado la casa', english: 'If I had had money, I would have bought the house', pronunciation: 'see oo-bee-EH-seh teh-NEE-doh dee-NEH-roh ah-BREE-ah kohm-PRAH-doh lah KAH-sah', category: 'pluperfect-subjunctive', audio: 'si-hubiese-tenido-dinero' },
  { spanish: 'Ojalá hubiéramos empezado antes', english: 'I wish we had started earlier', pronunciation: 'oh-hah-LAH oo-bee-EH-rah-mohs ehm-peh-SAH-doh AHN-tehs', category: 'pluperfect-subjunctive', audio: 'ojala-hubieramos-empezado' },
  { spanish: 'Si hubiera aceptado el trabajo, estaría en Madrid', english: 'If I had accepted the job, I would be in Madrid', pronunciation: 'see oo-bee-EH-rah ahk-sehp-TAH-doh ehl trah-BAH-hoh ehs-tah-REE-ah ehn mah-DREED', category: 'pluperfect-subjunctive', audio: 'si-hubiera-aceptado-el-trabajo' },
  { spanish: 'Si no hubiera conocido a María, mi vida sería diferente', english: 'If I had not met Maria, my life would be different', pronunciation: 'see noh oo-bee-EH-rah koh-noh-SEE-doh ah mah-REE-ah mee BEE-dah seh-REE-ah dee-feh-REHN-teh', category: 'pluperfect-subjunctive', audio: 'si-no-hubiera-conocido' },
  { spanish: 'Si hubiera podido, habría cambiado todo', english: 'If I had been able to, I would have changed everything', pronunciation: 'see oo-bee-EH-rah poh-DEE-doh ah-BREE-ah kahm-bee-AH-doh TOH-doh', category: 'pluperfect-subjunctive', audio: 'si-hubiera-podido' },

  // === Como si Clauses (14) ===
  { spanish: 'Habla como si fuera el jefe', english: 'He/She talks as if he/she were the boss', pronunciation: 'AH-blah KOH-moh see foo-EH-rah ehl HEH-feh', category: 'como-si-clauses', audio: 'habla-como-si-fuera-el-jefe' },
  { spanish: 'Actúa como si supiera todo', english: 'He/She acts as if he/she knew everything', pronunciation: 'ahk-TOO-ah KOH-moh see soo-pee-EH-rah TOH-doh', category: 'como-si-clauses', audio: 'actua-como-si-supiera-todo' },
  { spanish: 'Camina como si no tuviera prisa', english: 'He/She walks as if he/she were in no hurry', pronunciation: 'kah-MEE-nah KOH-moh see noh too-bee-EH-rah PREE-sah', category: 'como-si-clauses', audio: 'camina-como-si-no-tuviera-prisa' },
  { spanish: 'Me mira como si me conociera', english: 'He/She looks at me as if he/she knew me', pronunciation: 'meh MEE-rah KOH-moh see meh koh-noh-see-EH-rah', category: 'como-si-clauses', audio: 'me-mira-como-si-me-conociera' },
  { spanish: 'Vive como si no hubiera un mañana', english: 'He/She lives as if there were no tomorrow', pronunciation: 'BEE-beh KOH-moh see noh oo-bee-EH-rah oon mah-NYAH-nah', category: 'como-si-clauses', audio: 'vive-como-si-no-hubiera-manana' },
  { spanish: 'Llora como si se le hubiera roto el corazón', english: 'He/She cries as if his/her heart had broken', pronunciation: 'YOH-rah KOH-moh see seh leh oo-bee-EH-rah RROH-toh ehl koh-rah-SOHN', category: 'como-si-clauses', audio: 'llora-como-si-se-le-hubiera-roto' },
  { spanish: 'Gasta dinero como si fuera millonario', english: 'He/She spends money as if he/she were a millionaire', pronunciation: 'GAHS-tah dee-NEH-roh KOH-moh see foo-EH-rah mee-yoh-NAH-ree-oh', category: 'como-si-clauses', audio: 'gasta-dinero-como-si-fuera' },
  { spanish: 'Sonríe como si nada hubiera pasado', english: 'He/She smiles as if nothing had happened', pronunciation: 'sohn-REE-eh KOH-moh see NAH-dah oo-bee-EH-rah pah-SAH-doh', category: 'como-si-clauses', audio: 'sonrie-como-si-nada-hubiera' },
  { spanish: 'Corre como si lo persiguieran', english: 'He/She runs as if they were chasing him/her', pronunciation: 'KOH-rreh KOH-moh see loh pehr-see-gee-EH-rahn', category: 'como-si-clauses', audio: 'corre-como-si-lo-persiguieran' },
  { spanish: 'Trabaja como si no hubiera dormido', english: 'He/She works as if he/she had not slept', pronunciation: 'trah-BAH-hah KOH-moh see noh oo-bee-EH-rah dohr-MEE-doh', category: 'como-si-clauses', audio: 'trabaja-como-si-no-hubiera-dormido' },
  { spanish: 'Se comporta como si fuera un niño', english: 'He/She behaves as if he/she were a child', pronunciation: 'seh kohm-POHR-tah KOH-moh see foo-EH-rah oon NEE-nyoh', category: 'como-si-clauses', audio: 'se-comporta-como-si-fuera-nino' },
  { spanish: 'Responde como si no le importara', english: 'He/She responds as if he/she did not care', pronunciation: 'rehs-POHN-deh KOH-moh see noh leh eem-pohr-TAH-rah', category: 'como-si-clauses', audio: 'responde-como-si-no-le-importara' },
  { spanish: 'Come como si no hubiera comido en días', english: 'He/She eats as if he/she had not eaten in days', pronunciation: 'KOH-meh KOH-moh see noh oo-bee-EH-rah koh-MEE-doh ehn DEE-ahs', category: 'como-si-clauses', audio: 'come-como-si-no-hubiera-comido' },
  { spanish: 'Habla como si hubiera vivido allí toda la vida', english: 'He/She speaks as if he/she had lived there all his/her life', pronunciation: 'AH-blah KOH-moh see oo-bee-EH-rah bee-BEE-doh ah-YEE TOH-dah lah BEE-dah', category: 'como-si-clauses', audio: 'habla-como-si-hubiera-vivido' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L52PhraseByAudio = phraseByAudio

// === PARALLEL WORLD (unique activity) ===

export interface ParallelWorldChallenge {
  reality: string
  english: string
  correctCounterfactual: string
  options: string[]
}

export const PARALLEL_WORLD_CHALLENGES: ParallelWorldChallenge[] = [
  {
    reality: 'No estudié para el examen y lo reprobé.',
    english: 'I did not study for the exam and I failed it.',
    correctCounterfactual: 'Si hubiera estudiado, habría aprobado el examen.',
    options: [
      'Si hubiera estudiado, habría aprobado el examen.',
      'Si estudié, habría aprobado el examen.',
      'Si estudiaría, hubiera aprobado el examen.',
      'Si estudiara, aprobaré el examen.',
    ],
  },
  {
    reality: 'Llegué tarde y perdí el vuelo.',
    english: 'I arrived late and missed the flight.',
    correctCounterfactual: 'Si hubiera llegado a tiempo, no habría perdido el vuelo.',
    options: [
      'Si llegaría a tiempo, no perdí el vuelo.',
      'Si hubiera llegado a tiempo, no habría perdido el vuelo.',
      'Si llegué a tiempo, no perdería el vuelo.',
      'Si llegase a tiempo, no pierdo el vuelo.',
    ],
  },
  {
    reality: 'No aprendí español de niño y ahora me cuesta.',
    english: 'I did not learn Spanish as a child and now it is difficult for me.',
    correctCounterfactual: 'Si hubiera aprendido español de niño, ahora no me costaría.',
    options: [
      'Si aprendiera español de niño, ahora no me cuesta.',
      'Si hubiera aprendido español de niño, ahora no me costaría.',
      'Si aprendo español de niño, ahora no me costaría.',
      'Si aprendería español de niño, ahora no me costara.',
    ],
  },
  {
    reality: 'No le dije la verdad y se enojó conmigo.',
    english: 'I did not tell him/her the truth and he/she got angry with me.',
    correctCounterfactual: 'Si le hubiera dicho la verdad, no se habría enojado.',
    options: [
      'Si le dije la verdad, no se enojaría.',
      'Si le diría la verdad, no se hubiera enojado.',
      'Si le hubiera dicho la verdad, no se habría enojado.',
      'Si le dijera la verdad, no se enoja.',
    ],
  },
  {
    reality: 'Llovió mucho y se canceló el partido.',
    english: 'It rained a lot and the game was canceled.',
    correctCounterfactual: 'Si no hubiera llovido, no se habría cancelado el partido.',
    options: [
      'Si no lloviera, no se cancela el partido.',
      'Si no llovería, no se hubiera cancelado el partido.',
      'Si no llueve, no se habría cancelado el partido.',
      'Si no hubiera llovido, no se habría cancelado el partido.',
    ],
  },
  {
    reality: 'No traje paraguas y me mojé.',
    english: 'I did not bring an umbrella and I got wet.',
    correctCounterfactual: 'Si hubiera traído paraguas, no me habría mojado.',
    options: [
      'Si hubiera traído paraguas, no me habría mojado.',
      'Si trajera paraguas, no me mojaré.',
      'Si traería paraguas, no me hubiera mojado.',
      'Si traigo paraguas, no me mojaría.',
    ],
  },
  {
    reality: 'No acepté la oferta de trabajo y ahora me arrepiento.',
    english: 'I did not accept the job offer and now I regret it.',
    correctCounterfactual: 'Si hubiera aceptado la oferta, no me arrepentiría ahora.',
    options: [
      'Si aceptara la oferta, no me arrepiento ahora.',
      'Si aceptaría la oferta, no me arrepentiría ahora.',
      'Si hubiera aceptado la oferta, no me arrepentiría ahora.',
      'Si acepto la oferta, no me hubiera arrepentido.',
    ],
  },
]

// === LESSON DATA ===

export const L52Data: LessonData = {
  id: 'L5.2',
  hero: {
    lessonId: 'L5.2',
    title: 'Advanced Subjunctive',
    subtitle: 'Imperfect & Pluperfect Subjunctive — The Art of "What If"',
    description: 'Master the imperfect subjunctive (-ra and -se forms) and the pluperfect subjunctive (hubiera + participle) to express contrary-to-fact conditions, regrets, and vivid imagination. Unlock "como si" clauses to describe how things appear — the hallmark of truly advanced Spanish.',
    image: '/images/L5.2/L5.2.jpg',
    gradient: 'from-violet-800/65 via-fuchsia-700/55 to-pink-700/65',
    accentColor: 'fuchsia-200',
  },

  objectives: [
    { icon: '🌀', title: 'Imperfect Subjunctive (-ra)', desc: 'Conjugate and use the -ra forms: hablara, comiera, viviera, tuviera, pudiera, fuera, supiera.' },
    { icon: '📜', title: 'Imperfect Subjunctive (-se)', desc: 'Recognize and use the literary -se variants: hablase, comiese, viviese, tuviese, pudiese, fuese.' },
    { icon: '⏳', title: 'Pluperfect Subjunctive', desc: 'Combine hubiera/hubiese + past participle for contrary-to-fact past: Si hubiera sabido...' },
    { icon: '🎭', title: '"Como si" Clauses', desc: 'Use como si + imperfect/pluperfect subjunctive to describe appearances: Habla como si fuera...' },
  ],

  priorKnowledge: [
    { fromLesson: 'L4.2', label: 'Present Subjunctive', detail: 'L4.2 taught the present subjunctive (hable, coma, viva). Now shift to the PAST subjunctive: hablara, comiera, viviera.' },
    { fromLesson: 'L4.8', label: 'Si + Imperfect Subjunctive + Conditional', detail: 'L4.8 introduced "Si pudiera, viajaría." Now go deeper with both -ra/-se forms and add the pluperfect layer.' },
    { fromLesson: 'L4.1', label: 'Imperfect Tense', detail: 'L4.1 covered the imperfect indicative. The imperfect subjunctive stems come from the 3rd person plural preterite (ellos form).' },
  ],

  sectionTransitions: [
    { afterSection: 'imperfect-subj-ra', text: 'You\'ve mastered the -ra forms! Now let\'s see their literary twin: the -se forms.' },
    { afterSection: 'imperfect-subj-se', text: 'Both -ra and -se in your toolkit! Time to go one step further back in time with the pluperfect subjunctive.' },
    { afterSection: 'pluperfect-subj', text: 'You can express contrary-to-fact past! Now let\'s explore "como si" — how things appear to be.' },
    { afterSection: 'dialogues', text: 'Wonderful conversations with advanced subjunctive! Let\'s explore the cultural significance.' },
    { afterSection: 'cultural', text: 'Now put your skills to the test in the Parallel World activity!' },
    { afterSection: 'parallel-world', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'Si pudiera...', english: 'If I could...' },
    { spanish: 'Si hubiera sabido...', english: 'If I had known...' },
    { spanish: 'Como si fuera...', english: 'As if it were...' },
    { spanish: 'Ojalá hubiera...', english: 'I wish I had...' },
    { spanish: 'Quisiera...', english: 'I would like...' },
    { spanish: 'Si hubiese tenido...', english: 'If I had had...' },
  ],

  pronunciationChallenges: [
    { spanish: 'Si hubiera podido, habría cambiado todo', pronunciation: 'see oo-bee-EH-rah poh-DEE-doh ah-BREE-ah kahm-bee-AH-doh TOH-doh', english: 'If I had been able to, I would have changed everything', audio: 'si-hubiera-podido-habria-cambiado-todo', tip: 'The pluperfect subjunctive always pairs hubiera + past participle. Stress the -EH-rah in hubiera and the participle ending: sabIDo, comIDo, hablADo.' },
    { spanish: 'Quisiera un café, por favor', pronunciation: 'kee-see-EH-rah oon kah-FEH pohr fah-BOHR', english: 'I would like a coffee, please', audio: 'quisiera-un-cafe-por-favor', tip: '"Quisiera" is the imperfect subjunctive of querer — it sounds softer and more polite than "quiero." Stress: kee-see-EH-rah.' },
    { spanish: 'Habla como si fuera el jefe', pronunciation: 'AH-blah KOH-moh see foo-EH-rah ehl HEH-feh', english: 'He talks as if he were the boss', audio: 'habla-como-si-fuera-el-jefe', tip: '"Como si" ALWAYS triggers the subjunctive — either imperfect (for present comparison) or pluperfect (for past). Never indicative after "como si."' },
    { spanish: 'Ojalá hubiera viajado a Japón', pronunciation: 'oh-hah-LAH oo-bee-EH-rah bee-ah-HAH-doh ah hah-POHN', english: 'I wish I had traveled to Japan', audio: 'ojala-hubiera-viajado-a-japon', tip: '"Ojalá" + pluperfect subjunctive expresses a wish about the past that did NOT happen. It carries a sense of regret.' },
    { spanish: 'Si supiese la verdad, no callaría', pronunciation: 'see soo-pee-EH-seh lah behr-DAHD noh kah-yah-REE-ah', english: 'If I knew the truth, I would not stay silent', audio: 'si-supiese-la-verdad-no-callaria', tip: 'The -se form (supiese) is interchangeable with the -ra form (supiera). In speech, -ra dominates. In writing, -se adds a formal or literary tone.' },
    { spanish: 'Si no hubiera conocido a María, mi vida sería diferente', pronunciation: 'see noh oo-bee-EH-rah koh-noh-SEE-doh ah mah-REE-ah mee BEE-dah seh-REE-ah dee-feh-REHN-teh', english: 'If I had not met Maria, my life would be different', audio: 'si-no-hubiera-conocido-a-maria-mi-vida-seria-diferente', tip: 'Mixed conditional: pluperfect subjunctive (past cause) + conditional (present result). "Si hubiera + participle, ... + conditional" for past-to-present hypotheticals.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'imperfect-subj-ra', label: 'Imperfect Subjunctive (-ra)' },
    { id: 'imperfect-subj-se', label: 'Imperfect Subjunctive (-se)' },
    { id: 'pluperfect-subj', label: 'Pluperfect Subjunctive' },
    { id: 'como-si', label: '"Como si" Clauses' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'verb-sorting', label: 'Verb Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'parallel-world', label: 'Parallel World' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'imperfect-subj-ra',
      title: 'Imperfect Subjunctive (-ra) — El Imperfecto de Subjuntivo',
      description: 'Formed from the 3rd person plural preterite (ellos): hablaron → habla-ra, comieron → comie-ra, vivieron → vivie-ra. Endings: -ra, -ras, -ra, -ramos, -ran.',
      tabs: [
        { label: 'Si Clauses & Wishes', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'imperfect-subjunctive-ra').slice(0, 6) },
        { label: 'After Past Triggers', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'imperfect-subjunctive-ra').slice(6) },
      ],
    },
    {
      id: 'imperfect-subj-se',
      title: 'Imperfect Subjunctive (-se) — La Variante Literaria',
      description: 'Same stem as -ra, but with -se endings: -se, -ses, -se, -semos, -sen. Fully interchangeable with -ra. More common in formal writing and Spain.',
      tabs: [
        { label: 'Si Clauses (-se)', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'imperfect-subjunctive-se').slice(0, 5) },
        { label: 'Formal & Literary Uses', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'imperfect-subjunctive-se').slice(5) },
      ],
    },
    {
      id: 'pluperfect-subj',
      title: 'Pluperfect Subjunctive — El Pluscuamperfecto de Subjuntivo',
      description: 'Hubiera/hubiese + past participle. Expresses contrary-to-fact past: things that did NOT happen. "Si hubiera sabido..." (If I had known...)',
      tabs: [
        { label: 'Contrary-to-Fact Past', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'pluperfect-subjunctive').slice(0, 6) },
        { label: 'Regrets & Mixed Conditionals', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'pluperfect-subjunctive').slice(6) },
      ],
    },
    {
      id: 'como-si',
      title: '"Como si" Clauses — As If...',
      description: '"Como si" ALWAYS requires the subjunctive: imperfect subjunctive for present comparisons, pluperfect subjunctive for past comparisons. Never indicative!',
      tabs: [
        { label: 'Como si + Imperfect Subj.', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'como-si-clauses').slice(0, 7) },
        { label: 'Como si + Pluperfect Subj.', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'como-si-clauses').slice(7) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Imperfect Subjunctive Stem = Ellos Preterite',
      content: 'The #1 rule: take the 3rd person plural preterite (ellos form), drop -ron, and add subjunctive endings. Hablaron → habla- → hablara/hablase. Comieron → comie- → comiera/comiese. Tuvieron → tuvie- → tuviera/tuviese. This works for EVERY verb, including irregulars!',
      example: 'Fueron → fue- → fuera/fuese | Dijeron → dije- → dijera/dijese | Pudieron → pudie- → pudiera/pudiese',
      reviewFrom: 'L4.2',
    },
    {
      title: '-ra vs. -se: Same Meaning, Different Register',
      content: 'Both forms are grammatically identical in meaning. The -ra form dominates in everyday speech across all Spanish-speaking countries. The -se form appears more in formal writing, literature, and legal texts. In Spain, -se is somewhat more common in speech than in Latin America. You should recognize both but use -ra as your default.',
      example: 'Si tuviera tiempo = Si tuviese tiempo | Si pudiera ir = Si pudiese ir | Si fuera posible = Si fuese posible',
    },
    {
      title: 'Pluperfect Subjunctive: Two Layers Deep',
      content: 'The pluperfect subjunctive is hubiera/hubiese + past participle (-ado, -ido). It expresses something that did NOT happen in the past. The result clause uses the conditional perfect (habría + participle) or sometimes the conditional simple. Think of it as the "regret tense" — things you wish had gone differently.',
      example: 'Si hubiera estudiado (if I had studied) + habría aprobado (I would have passed) = complete contrary-to-fact past',
      reviewFrom: 'L4.8',
    },
    {
      title: '"Como si" — The Imagination Trigger',
      content: '"Como si" (as if) ALWAYS requires the subjunctive — never the indicative. Use imperfect subjunctive for simultaneous/present comparisons: "Habla como si supiera" (He talks as if he knew). Use pluperfect subjunctive for prior/past comparisons: "Habla como si hubiera vivido allí" (He talks as if he had lived there).',
      example: 'Present: como si fuera (as if he/she were) | Past: como si hubiera sido (as if he/she had been)',
    },
  ],

  flashcardGroups: [
    {
      key: 'imperfect-subj',
      label: 'Imperfect Subjunctive (-ra & -se)',
      audioKeys: ['quisiera-un-cafe', 'si-pudiera-volar', 'si-tuviera-mas-tiempo', 'si-fuera-posible', 'si-hablara-mejor', 'si-viviera-en-espana', 'si-supiera-la-respuesta', 'quisiese-un-momento-de-paz', 'si-pudiese-elegir', 'si-fuese-necesario'],
    },
    {
      key: 'pluperfect-subj',
      label: 'Pluperfect Subjunctive',
      audioKeys: ['si-hubiera-sabido', 'si-hubiera-estudiado-mas', 'ojala-hubiera-viajado', 'si-hubieramos-llegado-antes', 'si-no-hubiera-llovido', 'si-hubieran-escuchado', 'si-hubiese-tenido-dinero', 'si-hubiera-aceptado-el-trabajo', 'si-hubiera-podido'],
    },
    {
      key: 'como-si',
      label: '"Como si" Clauses',
      audioKeys: ['habla-como-si-fuera-el-jefe', 'actua-como-si-supiera-todo', 'camina-como-si-no-tuviera-prisa', 'vive-como-si-no-hubiera-manana', 'gasta-dinero-como-si-fuera', 'sonrie-como-si-nada-hubiera', 'corre-como-si-lo-persiguieran', 'se-comporta-como-si-fuera-nino'],
    },
  ],

  matchPairs: [
    { left: 'Si pudiera', right: 'If I could' },
    { left: 'Si hubiera sabido', right: 'If I had known' },
    { left: 'Como si fuera', right: 'As if he/she were' },
    { left: 'Quisiera', right: 'I would like' },
    { left: 'Si tuviese', right: 'If I had (formal)' },
    { left: 'Ojalá hubiera', right: 'I wish I had' },
    { left: 'Como si hubiera', right: 'As if he/she had' },
    { left: 'Si supiera', right: 'If I knew' },
  ],
  matchLabels: { left: 'Español', right: 'English' },

  sortActivities: [
    {
      title: '-ra vs. -se Forms',
      instruction: 'Is this verb in the -ra form or the -se form of the imperfect subjunctive?',
      buckets: ['-ra Form (Standard) 🌀', '-se Form (Literary) 📜'],
      items: [
        { text: 'Hablara', bucket: '-ra Form (Standard) 🌀' },
        { text: 'Comiera', bucket: '-ra Form (Standard) 🌀' },
        { text: 'Tuviera', bucket: '-ra Form (Standard) 🌀' },
        { text: 'Pudiera', bucket: '-ra Form (Standard) 🌀' },
        { text: 'Hablase', bucket: '-se Form (Literary) 📜' },
        { text: 'Comiese', bucket: '-se Form (Literary) 📜' },
        { text: 'Tuviese', bucket: '-se Form (Literary) 📜' },
        { text: 'Pudiese', bucket: '-se Form (Literary) 📜' },
      ],
    },
    {
      title: 'Imperfect vs. Pluperfect Subjunctive',
      instruction: 'Is this an imperfect subjunctive (present hypothetical) or pluperfect subjunctive (past contrary-to-fact)?',
      buckets: ['Imperfect Subjunctive ⏰', 'Pluperfect Subjunctive ⏳'],
      items: [
        { text: 'Si tuviera dinero...', bucket: 'Imperfect Subjunctive ⏰' },
        { text: 'Si fuera posible...', bucket: 'Imperfect Subjunctive ⏰' },
        { text: 'Como si supiera todo', bucket: 'Imperfect Subjunctive ⏰' },
        { text: 'Quisiera un café', bucket: 'Imperfect Subjunctive ⏰' },
        { text: 'Si hubiera sabido...', bucket: 'Pluperfect Subjunctive ⏳' },
        { text: 'Ojalá hubiera viajado', bucket: 'Pluperfect Subjunctive ⏳' },
        { text: 'Como si hubiera pasado', bucket: 'Pluperfect Subjunctive ⏳' },
        { text: 'Si hubiese tenido...', bucket: 'Pluperfect Subjunctive ⏳' },
      ],
    },
  ],
  sortSectionId: 'verb-sorting',
  sortTitle: 'Verb Sorting',

  dialogues: [
    {
      id: 'dialogue-alternate-lives',
      title: 'Imagining Alternate Life Paths — Madrid',
      location: 'Madrid',
      lines: [
        { speaker: 'Carmen', text: 'Diego, ¿alguna vez piensas en cómo sería tu vida si hubieras tomado otras decisiones?', audio: '/audio/L5.2/phrases/d1-line1.mp3' },
        { speaker: 'Diego', text: 'Constantemente. Si hubiera estudiado medicina en vez de derecho, ahora sería cirujano.', audio: '/audio/L5.2/phrases/d1-line2.mp3', annotations: [{ phrase: 'Si hubiera estudiado', fromLesson: 'L4.8', note: 'Pluperfect subjunctive for contrary-to-fact past, building on L4.8 si-clauses' }] },
        { speaker: 'Carmen', text: 'Y yo, si hubiese aceptado aquel trabajo en Buenos Aires, viviría allí ahora.', audio: '/audio/L5.2/phrases/d1-line3.mp3', annotations: [{ phrase: 'si hubiese aceptado', fromLesson: 'L4.2', note: 'The -se form of the pluperfect subjunctive — interchangeable with hubiera' }] },
        { speaker: 'Diego', text: '¿Te arrepientes? A veces actúas como si quisieras estar en otro lugar.', audio: '/audio/L5.2/phrases/d1-line4.mp3' },
        { speaker: 'Carmen', text: 'No exactamente. Es que a veces pienso que si pudiera vivir dos vidas, elegiría las dos.', audio: '/audio/L5.2/phrases/d1-line5.mp3' },
        { speaker: 'Diego', text: 'Te entiendo. Si tuviera la oportunidad de empezar de nuevo, estudiaría lo mismo pero viviría en otra ciudad.', audio: '/audio/L5.2/phrases/d1-line6.mp3', annotations: [{ phrase: 'Si tuviera la oportunidad', fromLesson: 'L4.8', note: 'Imperfect subjunctive in si-clause, conditional in result — the core L4.8 pattern' }] },
        { speaker: 'Carmen', text: 'Mi madre habla como si supiera exactamente lo que debería haber hecho. Dice que debí haber sido abogada.', audio: '/audio/L5.2/phrases/d1-line7.mp3' },
        { speaker: 'Diego', text: 'Las madres siempre hablan como si hubieran vivido nuestras vidas antes que nosotros.', audio: '/audio/L5.2/phrases/d1-line8.mp3' },
        { speaker: 'Carmen', text: 'Jaja, es verdad. Pero si no hubiera seguido mi propio camino, no sería quien soy hoy.', audio: '/audio/L5.2/phrases/d1-line9.mp3' },
      ],
    },
    {
      id: 'dialogue-regrets',
      title: 'Discussing Regrets and What They Wish Had Happened — Santiago de Chile',
      location: 'Santiago de Chile',
      lines: [
        { speaker: 'Javiera', text: 'Tomás, ¿hay algo que ojalá hubieras hecho diferente en la vida?', audio: '/audio/L5.2/phrases/d2-line1.mp3' },
        { speaker: 'Tomás', text: 'Sí, po. Si hubiera viajado más cuando era joven, tendría más experiencia del mundo.', audio: '/audio/L5.2/phrases/d2-line2.mp3', annotations: [{ phrase: 'Si hubiera viajado más', fromLesson: 'L4.8', note: 'Mixed conditional: pluperfect subjunctive (past) + conditional (present result)' }] },
        { speaker: 'Javiera', text: 'Yo también. Si hubiese aprendido inglés de chica, ahora no estaría luchando con las entrevistas de trabajo.', audio: '/audio/L5.2/phrases/d2-line3.mp3', annotations: [{ phrase: 'Si hubiese aprendido', fromLesson: 'L4.2', note: '-se variant of pluperfect subjunctive, common in Chilean formal register' }] },
        { speaker: 'Tomás', text: 'Mi hermano gasta plata como si fuera millonario. Le dije que si siguiera así, se quedaría sin nada.', audio: '/audio/L5.2/phrases/d2-line4.mp3' },
        { speaker: 'Javiera', text: 'Hay gente que vive como si no hubiera un mañana. A veces los envidio un poco.', audio: '/audio/L5.2/phrases/d2-line5.mp3' },
        { speaker: 'Tomás', text: 'Si hubiera ahorrado desde los veinte, ya tendría mi departamento propio.', audio: '/audio/L5.2/phrases/d2-line6.mp3' },
        { speaker: 'Javiera', text: 'Pero mira, si no hubiéramos pasado por todo eso, no seríamos las personas que somos ahora.', audio: '/audio/L5.2/phrases/d2-line7.mp3' },
        { speaker: 'Tomás', text: 'Tenís razón. Al final, prefiero lo que tengo ahora. Aunque a veces actúo como si quisiera otra cosa.', audio: '/audio/L5.2/phrases/d2-line8.mp3' },
      ],
    },
  ],
  dialogueDescription: 'A couple in Madrid imagines alternate life paths using imperfect and pluperfect subjunctive, then friends in Santiago de Chile discuss regrets and wishes about the past.',

  culturalNotes: [
    {
      title: 'El Subjuntivo y la Identidad Hispana',
      content: 'The subjunctive mood is far more alive in Spanish than in most other languages. While English has largely lost its subjunctive (surviving only in fossils like "if I were"), Spanish speakers use it daily — in wishes, doubts, emotions, and hypotheticals. Linguists argue that this reflects a cultural comfort with ambiguity and possibility. Rather than stating hard facts, Spanish naturally accommodates uncertainty: "Espero que vengas" (I hope you come — but maybe you won\'t). This is not vagueness — it\'s precision about the nature of reality vs. desire.',
    },
    {
      title: 'Las Formas -ra y -se: Un Mapa Regional',
      content: 'Both -ra and -se forms are considered correct by the RAE (Real Academia Española). However, their usage varies dramatically by region. In Latin America, the -ra form dominates almost exclusively in speech — you could spend months in Mexico, Colombia, or Argentina without hearing a single -se form. In Spain, both forms coexist, with -se appearing more in writing, formal registers, and certain dialects (especially in northern Spain). Historically, the -ra form originally had an indicative meaning (similar to the pluperfect: "cantara" once meant "had sung") before evolving into a subjunctive. This is why even today, the -ra form occasionally appears in journalistic Spanish with an indicative sense: "El gol que marcara Messi" (The goal that Messi scored).',
    },
    {
      title: 'Como si: El Poder de la Imaginación',
      content: '"Como si" (as if) is one of Spanish\'s most expressive constructions, found everywhere from literature to street slang. Gabriel García Márquez famously used it to blur the line between reality and fantasy in his magical realism: "Llovió como si el cielo se hubiera roto" (It rained as if the sky had broken). In everyday speech, it\'s a powerful tool for irony and social commentary: "Gasta como si fuera rico" (He spends as if he were rich — but he\'s not). Young people across Latin America use it constantly in informal speech: "Me habla como si fuera mi mamá" (She talks to me as if she were my mom). The construction forces the subjunctive, making it a perfect context to practice advanced conjugation naturally.',
    },
  ],
  culturalGradient: 'from-violet-50 to-fuchsia-50',

  quiz: [
    { id: 1, type: 'mc', text: 'The imperfect subjunctive of "hablar" (yo, -ra form) is:', options: ['Hable', 'Hablara', 'Hablaría', 'Hablé'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "Si ___ más dinero, viajaría al extranjero" (tener, yo, imperfect subjunctive)', answer: 'tuviera' },
    { id: 3, type: 'mc', text: 'The -se form of "pudiera" is:', options: ['Pudiese', 'Pudiase', 'Podase', 'Podiese'], answer: 0 },
    { id: 4, type: 'tf', text: 'The -ra and -se forms of the imperfect subjunctive are fully interchangeable in meaning.', answer: true },
    { id: 5, type: 'mc', text: '"Si hubiera sabido, habría venido" expresses:', options: ['A future plan', 'A present wish', 'A contrary-to-fact past situation', 'A command'], answer: 2 },
    { id: 6, type: 'fill', text: 'Complete: "Ojalá ___ viajado a Japón" (I wish I had traveled — hubiera)', answer: 'hubiera' },
    { id: 7, type: 'mc', text: '"Como si fuera" requires which mood?', options: ['Indicative', 'Imperative', 'Subjunctive', 'Conditional'], answer: 2 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what does Diego say he would have studied instead of law?', options: ['Architecture', 'Medicine', 'Engineering', 'Business'], answer: 1 },
    { id: 9, type: 'tf', text: 'The -se form of the imperfect subjunctive is more common in everyday Latin American speech than the -ra form.', answer: false },
    { id: 10, type: 'mc', text: 'The imperfect subjunctive stem comes from:', options: ['The infinitive', 'The 1st person singular present', 'The 3rd person plural preterite (ellos)', 'The past participle'], answer: 2 },
    { id: 11, type: 'fill', text: 'Complete: "Habla como si ___ todo" (supiera — as if he/she knew)', answer: 'supiera' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, what does Tomás regret not doing?', options: ['Studying more', 'Traveling when he was young', 'Learning English', 'Moving to another city'], answer: 1 },
    { id: 13, type: 'mc', text: '"Si hubiese tenido dinero, habría comprado la casa." "Hubiese" is:', options: ['Present subjunctive', 'Imperfect subjunctive (-se)', 'Pluperfect subjunctive (-se)', 'Conditional perfect'], answer: 2 },
    { id: 14, type: 'tf', text: 'In the cultural notes, García Márquez is mentioned as using "como si" in magical realism.', answer: true },
    { id: 15, type: 'mc', text: '"Si hubiera aceptado el trabajo, estaría en Madrid" is a mixed conditional because:', options: ['Both clauses are in the same tense', 'The si-clause is past but the result is present', 'It uses the indicative mood', 'It only uses the -ra form'], answer: 1 },
  ],

  audioBase: '/audio/L5.2/phrases',

  uniqueActivity: {
    id: 'ParallelWorldL52',
    sectionId: 'parallel-world',
    sectionColor: 'bg-violet-50/40',
    sectionBorder: 'border-violet-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-violet-50/30', border: 'border-violet-100' },
    'imperfect-subj-ra': { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'imperfect-subj-se': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'pluperfect-subj': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'como-si': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-purple-50/30', border: 'border-purple-100' },
    'matching-game': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'verb-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'parallel-world': { bg: 'bg-violet-50/40', border: 'border-violet-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
