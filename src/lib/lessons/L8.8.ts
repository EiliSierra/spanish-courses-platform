import type { LessonData } from '@/lib/types/lesson'

const PHRASES = [
  // === Pedagogy & Theory (12) ===
  { spanish: 'El constructivismo sostiene que el aprendizaje se construye activamente a partir de la experiencia', english: 'Constructivism holds that learning is actively built from experience', pronunciation: 'ehl kohns-trook-tee-BEES-moh sohs-tee-EH-neh keh ehl ah-prehn-dee-SAH-heh seh kohns-TROO-yeh ahk-tee-bah-MEHN-teh ah pahr-TEER deh lah ehks-peh-ree-EHN-see-ah', category: 'pedagogy-theory', audio: 'el-constructivismo-sostiene' },
  { spanish: 'El aprendizaje significativo conecta los conocimientos nuevos con los saberes previos del estudiante', english: 'Meaningful learning connects new knowledge with the student\'s prior knowledge', pronunciation: 'ehl ah-prehn-dee-SAH-heh seeg-nee-fee-kah-TEE-boh koh-NEHK-tah lohs koh-noh-see-mee-EHN-tohs NWEH-bohs kohn lohs sah-BEH-rehs PREH-bee-ohs dehl ehs-too-dee-AHN-teh', category: 'pedagogy-theory', audio: 'el-aprendizaje-significativo' },
  { spanish: 'La zona de desarrollo próximo es la distancia entre lo que el alumno sabe y lo que puede lograr con ayuda', english: 'The zone of proximal development is the distance between what the student knows and what they can achieve with help', pronunciation: 'lah SOH-nah deh deh-sah-RROH-yoh PROHK-see-moh ehs lah dees-TAHN-see-ah EHN-treh loh keh ehl ah-LOOM-noh SAH-beh ee loh keh PWEH-deh loh-GRAHR kohn ah-YOO-dah', category: 'pedagogy-theory', audio: 'la-zona-de-desarrollo' },
  { spanish: 'El andamiaje proporciona apoyo temporal que se retira gradualmente a medida que el alumno progresa', english: 'Scaffolding provides temporary support that is gradually removed as the student progresses', pronunciation: 'ehl ahn-dah-mee-AH-heh proh-pohr-see-OH-nah ah-POH-yoh tehm-poh-RAHL keh seh rreh-TEE-rah grah-doo-AHL-mehn-teh ah meh-DEE-dah keh ehl ah-LOOM-noh proh-GREH-sah', category: 'pedagogy-theory', audio: 'el-andamiaje-proporciona' },
  { spanish: 'La educación diferenciada adapta la enseñanza a los diversos estilos y ritmos de aprendizaje', english: 'Differentiated education adapts teaching to diverse learning styles and paces', pronunciation: 'lah eh-doo-kah-see-OHN dee-feh-rehn-see-AH-dah ah-DAHP-tah lah ehn-seh-NYAHN-sah ah lohs dee-BEHR-sohs ehs-TEE-lohs ee RREET-mohs deh ah-prehn-dee-SAH-heh', category: 'pedagogy-theory', audio: 'la-educacion-diferenciada' },
  { spanish: 'La taxonomía de Bloom clasifica los niveles de pensamiento desde recordar hasta crear', english: 'Bloom\'s taxonomy classifies levels of thinking from remembering to creating', pronunciation: 'lah tahk-soh-noh-MEE-ah deh bloom klah-SEE-fee-kah lohs nee-BEH-lehs deh pehn-sah-mee-EHN-toh DEHS-deh rreh-kohr-DAHR AHS-tah kreh-AHR', category: 'pedagogy-theory', audio: 'la-taxonomia-de-bloom' },
  { spanish: 'El aprendizaje basado en problemas presenta situaciones reales para desarrollar el pensamiento crítico', english: 'Problem-based learning presents real situations to develop critical thinking', pronunciation: 'ehl ah-prehn-dee-SAH-heh bah-SAH-doh ehn proh-BLEH-mahs preh-SEHN-tah see-too-ah-see-OH-nehs rreh-AH-lehs PAH-rah deh-sah-rroh-YAHR ehl pehn-sah-mee-EHN-toh KREE-tee-koh', category: 'pedagogy-theory', audio: 'el-aprendizaje-basado' },
  { spanish: 'La metacognición es la capacidad de reflexionar sobre los propios procesos de aprendizaje', english: 'Metacognition is the ability to reflect on one\'s own learning processes', pronunciation: 'lah meh-tah-kohg-nee-see-OHN ehs lah kah-pah-see-DAHD deh rreh-flehk-see-oh-NAHR SOH-breh lohs PROH-pee-ohs proh-SEH-sohs deh ah-prehn-dee-SAH-heh', category: 'pedagogy-theory', audio: 'la-metacognicion-es' },
  { spanish: 'La motivación intrínseca impulsa al estudiante a aprender por el placer del conocimiento', english: 'Intrinsic motivation drives the student to learn for the pleasure of knowledge', pronunciation: 'lah moh-tee-bah-see-OHN een-TREEN-seh-kah eem-POOL-sah ahl ehs-too-dee-AHN-teh ah ah-prehn-DEHR pohr ehl plah-SEHR dehl koh-noh-see-mee-EHN-toh', category: 'pedagogy-theory', audio: 'la-motivacion-intrinseca' },
  { spanish: 'El aprendizaje cooperativo fomenta la colaboración entre estudiantes para alcanzar objetivos comunes', english: 'Cooperative learning fosters collaboration among students to achieve common goals', pronunciation: 'ehl ah-prehn-dee-SAH-heh koh-oh-peh-rah-TEE-boh foh-MEHN-tah lah koh-lah-boh-rah-see-OHN EHN-treh ehs-too-dee-AHN-tehs PAH-rah ahl-kahn-SAHR ohb-heh-TEE-bohs koh-MOO-nehs', category: 'pedagogy-theory', audio: 'el-aprendizaje-cooperativo' },
  { spanish: 'La pedagogía crítica cuestiona las relaciones de poder dentro del sistema educativo', english: 'Critical pedagogy questions power relations within the educational system', pronunciation: 'lah peh-dah-goh-HEE-ah KREE-tee-kah kwehs-tee-OH-nah lahs rreh-lah-see-OH-nehs deh poh-DEHR DEHN-troh dehl sees-TEH-mah eh-doo-kah-TEE-boh', category: 'pedagogy-theory', audio: 'la-pedagogia-critica' },
  { spanish: 'Las inteligencias múltiples reconocen que cada persona aprende de maneras diferentes', english: 'Multiple intelligences recognize that each person learns in different ways', pronunciation: 'lahs een-teh-lee-HEHN-see-ahs MOOL-tee-plehs rreh-koh-NOH-sehn keh KAH-dah pehr-SOH-nah ah-PREHN-deh deh mah-NEH-rahs dee-feh-REHN-tehs', category: 'pedagogy-theory', audio: 'las-inteligencias-multiples' },

  // === Classroom Management (12) ===
  { spanish: 'La planificación didáctica organiza los contenidos, actividades y tiempos de cada lección', english: 'Lesson planning organizes content, activities, and time for each lesson', pronunciation: 'lah plah-nee-fee-kah-see-OHN dee-DAHK-tee-kah ohr-gah-NEE-sah lohs kohn-teh-NEE-dohs ahk-tee-bee-DAH-dehs ee tee-EHM-pohs deh KAH-dah lehk-see-OHN', category: 'classroom-management', audio: 'la-planificacion-didactica' },
  { spanish: 'Los objetivos de aprendizaje definen lo que el estudiante debe saber al final de la lección', english: 'Learning objectives define what the student should know at the end of the lesson', pronunciation: 'lohs ohb-heh-TEE-bohs deh ah-prehn-dee-SAH-heh deh-FEE-nehn loh keh ehl ehs-too-dee-AHN-teh DEH-beh sah-BEHR ahl fee-NAHL deh lah lehk-see-OHN', category: 'classroom-management', audio: 'los-objetivos-de-aprendizaje' },
  { spanish: 'La evaluación formativa permite ajustar la enseñanza durante el proceso de aprendizaje', english: 'Formative assessment allows adjusting teaching during the learning process', pronunciation: 'lah eh-bah-loo-ah-see-OHN fohr-mah-TEE-bah pehr-MEE-teh ah-hoos-TAHR lah ehn-seh-NYAHN-sah doo-RAHN-teh ehl proh-SEH-soh deh ah-prehn-dee-SAH-heh', category: 'classroom-management', audio: 'la-evaluacion-formativa' },
  { spanish: 'La rúbrica establece criterios claros y niveles de desempeño para evaluar trabajos', english: 'A rubric establishes clear criteria and performance levels for evaluating work', pronunciation: 'lah RROO-bree-kah ehs-tah-BLEH-seh kree-TEH-ree-ohs KLAH-rohs ee nee-BEH-lehs deh dehm-peh-NYOH PAH-rah eh-bah-loo-AHR trah-BAH-hohs', category: 'classroom-management', audio: 'la-rubrica-establece' },
  { spanish: 'La retroalimentación efectiva es específica, oportuna y orientada al mejoramiento', english: 'Effective feedback is specific, timely, and improvement-oriented', pronunciation: 'lah rreh-troh-ah-lee-mehn-tah-see-OHN eh-fehk-TEE-bah ehs ehs-peh-SEE-fee-kah oh-pohr-TOO-nah ee oh-ree-ehn-TAH-dah ahl meh-hoh-rah-mee-EHN-toh', category: 'classroom-management', audio: 'la-retroalimentacion-efectiva' },
  { spanish: 'La gestión del aula crea un ambiente propicio para el aprendizaje y la convivencia', english: 'Classroom management creates an environment conducive to learning and coexistence', pronunciation: 'lah hehs-tee-OHN dehl OW-lah KREH-ah oon ahm-bee-EHN-teh proh-PEE-see-oh PAH-rah ehl ah-prehn-dee-SAH-heh ee lah kohn-bee-BEHN-see-ah', category: 'classroom-management', audio: 'la-gestion-del-aula' },
  { spanish: 'La evaluación sumativa mide el aprendizaje al final de una unidad o curso', english: 'Summative assessment measures learning at the end of a unit or course', pronunciation: 'lah eh-bah-loo-ah-see-OHN soo-mah-TEE-bah MEE-deh ehl ah-prehn-dee-SAH-heh ahl fee-NAHL deh OO-nah oo-nee-DAHD oh KOOR-soh', category: 'classroom-management', audio: 'la-evaluacion-sumativa' },
  { spanish: 'Las estrategias de enseñanza deben adaptarse al contexto sociocultural de los alumnos', english: 'Teaching strategies should adapt to the sociocultural context of students', pronunciation: 'lahs ehs-trah-TEH-hee-ahs deh ehn-seh-NYAHN-sah DEH-behn ah-dahp-TAHR-seh ahl kohn-TEHKS-toh soh-see-oh-kool-too-RAHL deh lohs ah-LOOM-nohs', category: 'classroom-management', audio: 'las-estrategias-de-ensenanza' },
  { spanish: 'La inclusión educativa garantiza el acceso y participación de todos los estudiantes', english: 'Educational inclusion guarantees access and participation for all students', pronunciation: 'lah een-kloo-see-OHN eh-doo-kah-TEE-bah gah-rahn-TEE-sah ehl ahk-SEH-soh ee pahr-tee-see-pah-see-OHN deh TOH-dohs lohs ehs-too-dee-AHN-tehs', category: 'classroom-management', audio: 'la-inclusion-educativa' },
  { spanish: 'El diagnóstico inicial identifica los conocimientos previos y necesidades del grupo', english: 'The initial diagnosis identifies prior knowledge and needs of the group', pronunciation: 'ehl dee-ahg-NOHS-tee-koh ee-nee-see-AHL ee-dehn-tee-FEE-kah lohs koh-noh-see-mee-EHN-tohs PREH-bee-ohs ee neh-seh-see-DAH-dehs dehl GROO-poh', category: 'classroom-management', audio: 'el-diagnostico-inicial' },
  { spanish: 'El portafolio del estudiante documenta su progreso y reflexión a lo largo del curso', english: 'The student portfolio documents their progress and reflection throughout the course', pronunciation: 'ehl pohr-tah-FOH-lee-oh dehl ehs-too-dee-AHN-teh doh-koo-MEHN-tah soo proh-GREH-soh ee rreh-flehk-see-OHN ah loh LAHR-goh dehl KOOR-soh', category: 'classroom-management', audio: 'el-portafolio-del-estudiante' },
  { spanish: 'La disciplina positiva establece límites claros sin recurrir al castigo punitivo', english: 'Positive discipline sets clear limits without resorting to punitive punishment', pronunciation: 'lah dees-see-PLEE-nah poh-see-TEE-bah ehs-tah-BLEH-seh LEE-mee-tehs KLAH-rohs seen rreh-koo-RREER ahl kahs-TEE-goh poo-nee-TEE-boh', category: 'classroom-management', audio: 'la-disciplina-positiva' },

  // === Curriculum Design (12) ===
  { spanish: 'El plan de estudios estructura las materias y contenidos de un programa educativo', english: 'The curriculum structures the subjects and content of an educational program', pronunciation: 'ehl plahn deh ehs-TOO-dee-ohs ehs-trook-TOO-rah lahs mah-TEH-ree-ahs ee kohn-teh-NEE-dohs deh oon proh-GRAH-mah eh-doo-kah-TEE-boh', category: 'curriculum-design', audio: 'el-plan-de-estudios' },
  { spanish: 'Las competencias transversales se desarrollan en todas las materias del currículo', english: 'Cross-cutting competencies are developed in all subjects of the curriculum', pronunciation: 'lahs kohm-peh-TEHN-see-ahs trahns-behr-SAH-lehs seh deh-sah-RROH-yahn ehn TOH-dahs lahs mah-TEH-ree-ahs dehl koo-RREE-koo-loh', category: 'curriculum-design', audio: 'las-competencias-transversales' },
  { spanish: 'La secuencia didáctica ordena las actividades de aprendizaje de manera lógica y progresiva', english: 'The didactic sequence orders learning activities in a logical and progressive manner', pronunciation: 'lah seh-KWEHN-see-ah dee-DAHK-tee-kah OHR-deh-nah lahs ahk-tee-bee-DAH-dehs deh ah-prehn-dee-SAH-heh deh mah-NEH-rah LOH-hee-kah ee proh-greh-SEE-bah', category: 'curriculum-design', audio: 'la-secuencia-didactica' },
  { spanish: 'Los contenidos curriculares deben ser pertinentes, actualizados y culturalmente relevantes', english: 'Curriculum content must be pertinent, updated, and culturally relevant', pronunciation: 'lohs kohn-teh-NEE-dohs koo-rree-koo-LAH-rehs DEH-behn sehr pehr-tee-NEHN-tehs ahk-too-ah-lee-SAH-dohs ee kool-too-RAHL-mehn-teh rreh-leh-BAHN-tehs', category: 'curriculum-design', audio: 'los-contenidos-curriculares' },
  { spanish: 'El perfil de egreso describe las competencias que el graduado debe demostrar', english: 'The graduate profile describes the competencies the graduate must demonstrate', pronunciation: 'ehl pehr-FEEL deh eh-GREH-soh dehs-KREE-beh lahs kohm-peh-TEHN-see-ahs keh ehl grah-doo-AH-doh DEH-beh deh-mohs-TRAHR', category: 'curriculum-design', audio: 'el-perfil-de-egreso' },
  { spanish: 'La adecuación curricular modifica el programa para atender necesidades educativas especiales', english: 'Curriculum adaptation modifies the program to address special educational needs', pronunciation: 'lah ah-deh-kwah-see-OHN koo-rree-koo-LAHR moh-dee-FEE-kah ehl proh-GRAH-mah PAH-rah ah-tehn-DEHR neh-seh-see-DAH-dehs eh-doo-kah-TEE-bahs ehs-peh-see-AH-lehs', category: 'curriculum-design', audio: 'la-adecuacion-curricular' },
  { spanish: 'Los estándares educativos establecen expectativas comunes de lo que los estudiantes deben aprender', english: 'Educational standards establish common expectations of what students should learn', pronunciation: 'lohs ehs-TAHN-dah-rehs eh-doo-kah-TEE-bohs ehs-tah-BLEH-sehn ehks-pehk-tah-TEE-bahs koh-MOO-nehs deh loh keh lohs ehs-too-dee-AHN-tehs DEH-behn ah-prehn-DEHR', category: 'curriculum-design', audio: 'los-estandares-educativos' },
  { spanish: 'La interdisciplinariedad conecta diferentes materias para un aprendizaje más integrado', english: 'Interdisciplinarity connects different subjects for more integrated learning', pronunciation: 'lah een-tehr-dees-see-plee-nah-ree-eh-DAHD koh-NEHK-tah dee-feh-REHN-tehs mah-TEH-ree-ahs PAH-rah oon ah-prehn-dee-SAH-heh mahs een-teh-GRAH-doh', category: 'curriculum-design', audio: 'la-interdisciplinariedad' },
  { spanish: 'El aprendizaje por proyectos integra múltiples competencias en una tarea auténtica', english: 'Project-based learning integrates multiple competencies in an authentic task', pronunciation: 'ehl ah-prehn-dee-SAH-heh pohr proh-YEHK-tohs een-TEH-grah MOOL-tee-plehs kohm-peh-TEHN-see-ahs ehn OO-nah tah-REH-ah ow-TEHN-tee-kah', category: 'curriculum-design', audio: 'el-aprendizaje-por-proyectos' },
  { spanish: 'La evaluación por competencias mide lo que el estudiante puede hacer, no solo lo que sabe', english: 'Competency-based assessment measures what the student can do, not only what they know', pronunciation: 'lah eh-bah-loo-ah-see-OHN pohr kohm-peh-TEHN-see-ahs MEE-deh loh keh ehl ehs-too-dee-AHN-teh PWEH-deh ah-SEHR noh SOH-loh loh keh SAH-beh', category: 'curriculum-design', audio: 'la-evaluacion-por-competencias' },
  { spanish: 'El currículo oculto transmite valores y actitudes de manera implícita a través de la cultura escolar', english: 'The hidden curriculum transmits values and attitudes implicitly through school culture', pronunciation: 'ehl koo-RREE-koo-loh oh-KOOL-toh trahns-MEE-teh bah-LOH-rehs ee ahk-tee-TOO-dehs deh mah-NEH-rah eem-PLEE-see-tah ah trah-BEHS deh lah kool-TOO-rah ehs-koh-LAHR', category: 'curriculum-design', audio: 'el-curriculo-oculto' },
  { spanish: 'La alineación curricular asegura coherencia entre objetivos, actividades y evaluación', english: 'Curriculum alignment ensures coherence between objectives, activities, and assessment', pronunciation: 'lah ah-lee-neh-ah-see-OHN koo-rree-koo-LAHR ah-seh-GOO-rah koh-eh-REHN-see-ah EHN-treh ohb-heh-TEE-bohs ahk-tee-bee-DAH-dehs ee eh-bah-loo-ah-see-OHN', category: 'curriculum-design', audio: 'la-alineacion-curricular' },

  // === Educational Technology (12) ===
  { spanish: 'El aula invertida transfiere la instrucción directa fuera del aula para usar el tiempo presencial en actividades prácticas', english: 'The flipped classroom transfers direct instruction outside the classroom to use in-person time for hands-on activities', pronunciation: 'ehl OW-lah een-behr-TEE-dah trahns-fee-EH-reh lah eens-trook-see-OHN dee-REHK-tah FWEH-rah dehl OW-lah PAH-rah oo-SAHR ehl tee-EHM-poh preh-sehn-see-AHL ehn ahk-tee-bee-DAH-dehs PRAHK-tee-kahs', category: 'educational-technology', audio: 'el-aula-invertida' },
  { spanish: 'La gamificación aplica elementos de juego al proceso educativo para aumentar la motivación', english: 'Gamification applies game elements to the educational process to increase motivation', pronunciation: 'lah gah-mee-fee-kah-see-OHN ah-PLEE-kah eh-leh-MEHN-tohs deh HWEH-goh ahl proh-SEH-soh eh-doo-kah-TEE-boh PAH-rah ow-mehn-TAHR lah moh-tee-bah-see-OHN', category: 'educational-technology', audio: 'la-gamificacion-aplica' },
  { spanish: 'El aprendizaje híbrido combina la instrucción presencial con actividades en línea', english: 'Hybrid learning combines in-person instruction with online activities', pronunciation: 'ehl ah-prehn-dee-SAH-heh EE-bree-doh kohm-BEE-nah lah eens-trook-see-OHN preh-sehn-see-AHL kohn ahk-tee-bee-DAH-dehs ehn LEE-neh-ah', category: 'educational-technology', audio: 'el-aprendizaje-hibrido' },
  { spanish: 'La plataforma educativa centraliza recursos, tareas y comunicación entre docentes y estudiantes', english: 'The educational platform centralizes resources, assignments, and communication between teachers and students', pronunciation: 'lah plah-tah-FOHR-mah eh-doo-kah-TEE-bah sehn-trah-LEE-sah rreh-KOOR-sohs tah-REH-ahs ee koh-moo-nee-kah-see-OHN EHN-treh doh-SEHN-tehs ee ehs-too-dee-AHN-tehs', category: 'educational-technology', audio: 'la-plataforma-educativa' },
  { spanish: 'La alfabetización digital es una competencia esencial para el ciudadano del siglo XXI', english: 'Digital literacy is an essential competency for the 21st-century citizen', pronunciation: 'lah ahl-fah-beh-tee-sah-see-OHN dee-hee-TAHL ehs OO-nah kohm-peh-TEHN-see-ah eh-sehn-see-AHL PAH-rah ehl see-oo-dah-DAH-noh dehl SEE-gloh beyn-tee-OO-noh', category: 'educational-technology', audio: 'la-alfabetizacion-digital' },
  { spanish: 'La brecha digital excluye a millones de estudiantes del acceso a la educación tecnológica', english: 'The digital divide excludes millions of students from access to technology-based education', pronunciation: 'lah BREH-chah dee-hee-TAHL ehks-KLOO-yeh ah mee-YOH-nehs deh ehs-too-dee-AHN-tehs dehl ahk-SEH-soh ah lah eh-doo-kah-see-OHN tehk-noh-LOH-hee-kah', category: 'educational-technology', audio: 'la-brecha-digital' },
  { spanish: 'Los recursos educativos abiertos democratizan el acceso al conocimiento sin costo', english: 'Open educational resources democratize access to knowledge at no cost', pronunciation: 'lohs rreh-KOOR-sohs eh-doo-kah-TEE-bohs ah-bee-EHR-tohs deh-moh-krah-TEE-sahn ehl ahk-SEH-soh ahl koh-noh-see-mee-EHN-toh seen KOHS-toh', category: 'educational-technology', audio: 'los-recursos-educativos' },
  { spanish: 'La inteligencia artificial personaliza el aprendizaje según el ritmo y nivel de cada estudiante', english: 'Artificial intelligence personalizes learning according to each student\'s pace and level', pronunciation: 'lah een-teh-lee-HEHN-see-ah ahr-tee-fee-see-AHL pehr-soh-nah-LEE-sah ehl ah-prehn-dee-SAH-heh seh-GOON ehl RREET-moh ee nee-BEHL deh KAH-dah ehs-too-dee-AHN-teh', category: 'educational-technology', audio: 'la-inteligencia-artificial' },
  { spanish: 'La realidad virtual permite experiencias inmersivas que transforman el aprendizaje', english: 'Virtual reality enables immersive experiences that transform learning', pronunciation: 'lah rreh-ah-lee-DAHD beer-too-AHL pehr-MEE-teh ehks-peh-ree-EHN-see-ahs een-mehr-SEE-bahs keh trahns-FOHR-mahn ehl ah-prehn-dee-SAH-heh', category: 'educational-technology', audio: 'la-realidad-virtual' },
  { spanish: 'El pensamiento computacional desarrolla habilidades de resolución de problemas sistemática', english: 'Computational thinking develops systematic problem-solving skills', pronunciation: 'ehl pehn-sah-mee-EHN-toh kohm-poo-tah-see-oh-NAHL deh-sah-RROH-yah ah-bee-lee-DAH-dehs deh rreh-soh-loo-see-OHN deh proh-BLEH-mahs sees-teh-MAH-tee-kah', category: 'educational-technology', audio: 'el-pensamiento-computacional' },
  { spanish: 'La evaluación adaptativa ajusta la dificultad de las preguntas según las respuestas del estudiante', english: 'Adaptive assessment adjusts question difficulty based on the student\'s answers', pronunciation: 'lah eh-bah-loo-ah-see-OHN ah-dahp-tah-TEE-bah ah-HOOS-tah lah dee-fee-kool-TAHD deh lahs preh-GOON-tahs seh-GOON lahs rrehs-PWEHS-tahs dehl ehs-too-dee-AHN-teh', category: 'educational-technology', audio: 'la-evaluacion-adaptativa' },
  { spanish: 'La ciudadanía digital enseña el uso responsable y ético de la tecnología', english: 'Digital citizenship teaches responsible and ethical use of technology', pronunciation: 'lah see-oo-dah-dah-NEE-ah dee-hee-TAHL ehn-SEH-nyah ehl OO-soh rrehs-pohn-SAH-bleh ee EH-tee-koh deh lah tehk-noh-loh-HEE-ah', category: 'educational-technology', audio: 'la-ciudadania-digital' },
]

const phraseByAudio: Record<string, (typeof PHRASES)[number]> = {}
PHRASES.forEach((p) => { phraseByAudio[p.audio] = p })
export const L88PhraseByAudio = phraseByAudio

// === LESSON PLANNER (unique activity) ===

export interface LessonPlannerChallenge {
  teachingScenario: string
  english: string
  correctApproach: string
  options: string[]
}

export const LESSON_PLANNER_CHALLENGES: LessonPlannerChallenge[] = [
  {
    teachingScenario: 'Un grupo de estudiantes de secundaria muestra poco interés en la clase de historia. ¿Qué enfoque pedagógico sería más efectivo?',
    english: 'A group of high school students shows little interest in history class. Which pedagogical approach would be most effective?',
    correctApproach: 'El aprendizaje basado en problemas: presentar un dilema histórico real para que investiguen y debatan',
    options: ['El aprendizaje basado en problemas: presentar un dilema histórico real para que investiguen y debatan', 'Repetir la lección más lentamente y con más fechas', 'Dar un examen sorpresa para motivarlos con la nota', 'Eliminar la historia del currículo por ser irrelevante'],
  },
  {
    teachingScenario: 'Una alumna de primaria domina rápidamente las tareas mientras sus compañeros aún practican. ¿Cómo atender su necesidad?',
    english: 'A primary student quickly masters tasks while her classmates are still practicing. How to address her need?',
    correctApproach: 'Aplicar educación diferenciada: ofrecer actividades de extensión que desafíen su zona de desarrollo próximo',
    options: ['Pedirle que espere en silencio hasta que todos terminen', 'Aplicar educación diferenciada: ofrecer actividades de extensión que desafíen su zona de desarrollo próximo', 'Adelantarla de grado inmediatamente', 'Asignarle como tutora permanente sin variar su aprendizaje'],
  },
  {
    teachingScenario: 'Al revisar los exámenes, descubres que el 70% de la clase reprobó un tema específico. ¿Qué tipo de evaluación debiste usar antes?',
    english: 'Upon reviewing exams, you discover 70% of the class failed a specific topic. What type of assessment should you have used beforehand?',
    correctApproach: 'La evaluación formativa: verificar la comprensión durante el proceso para ajustar la enseñanza antes del examen',
    options: ['Una evaluación sumativa más fácil', 'La evaluación formativa: verificar la comprensión durante el proceso para ajustar la enseñanza antes del examen', 'Eliminar ese tema del currículo', 'Repetir el examen sin cambiar la enseñanza'],
  },
  {
    teachingScenario: 'Diseñas un curso de ciencias para una escuela rural sin acceso constante a internet. ¿Qué estrategia tecnológica es más apropiada?',
    english: 'You design a science course for a rural school without constant internet access. Which technological strategy is most appropriate?',
    correctApproach: 'Usar recursos educativos abiertos descargables y actividades offline, reconociendo la brecha digital',
    options: ['Exigir que todos los estudiantes compren tablets con datos', 'Usar recursos educativos abiertos descargables y actividades offline, reconociendo la brecha digital', 'Impartir la clase exclusivamente por videoconferencia', 'Eliminar el componente tecnológico completamente'],
  },
  {
    teachingScenario: 'Un profesor universitario quiere que sus alumnos lleguen a clase habiendo leído el material y usen el tiempo presencial para debate y práctica. ¿Qué modelo describe esto?',
    english: 'A university professor wants students to arrive having read the material and use class time for debate and practice. What model describes this?',
    correctApproach: 'El aula invertida: la instrucción directa ocurre fuera del aula y el tiempo presencial se dedica a actividades de orden superior',
    options: ['El aprendizaje cooperativo tradicional', 'La clase magistral con preguntas', 'El aula invertida: la instrucción directa ocurre fuera del aula y el tiempo presencial se dedica a actividades de orden superior', 'El aprendizaje autónomo sin intervención docente'],
  },
  {
    teachingScenario: 'Necesitas evaluar un proyecto grupal donde cada estudiante contribuyó de manera diferente. ¿Qué herramienta de evaluación es más justa?',
    english: 'You need to evaluate a group project where each student contributed differently. What assessment tool is fairest?',
    correctApproach: 'Una rúbrica con criterios claros que evalúe tanto la contribución individual como el producto grupal',
    options: ['Dar la misma nota a todos los miembros del grupo', 'Una rúbrica con criterios claros que evalúe tanto la contribución individual como el producto grupal', 'Evaluar solo el resultado final sin considerar el proceso', 'Pedir que los estudiantes se pongan nota entre ellos sin guía'],
  },
  {
    teachingScenario: 'Un alumno con dislexia necesita apoyo adicional en clase de lectura sin ser separado de sus compañeros. ¿Qué principio aplica?',
    english: 'A student with dyslexia needs additional support in reading class without being separated from peers. What principle applies?',
    correctApproach: 'La adecuación curricular con inclusión educativa: modificar materiales y estrategias manteniendo la participación en el aula regular',
    options: ['Enviarlo a una escuela especial', 'La adecuación curricular con inclusión educativa: modificar materiales y estrategias manteniendo la participación en el aula regular', 'Exigirle los mismos resultados sin apoyo adicional', 'Eximirlo de todas las actividades de lectura'],
  },
]

// === LESSON DATA ===

export const L88Data: LessonData = {
  id: 'L8.8',
  hero: {
    lessonId: 'L8.8',
    title: 'Education & Teaching Methodology',
    subtitle: 'The language of pedagogy, curriculum design, and educational innovation',
    description: 'Master the specialized vocabulary of education: pedagogy, classroom management, curriculum design, and educational technology. From Bloom\'s taxonomy to the flipped classroom, learn to discuss teaching and learning in Spanish at the professional level.',
    image: '/images/L8.8/L8.8.jpg',
    gradient: 'from-amber-800/65 via-orange-700/55 to-rose-700/65',
    accentColor: 'amber-200',
  },

  objectives: [
    { icon: '📚', title: 'Pedagogy & Theory', desc: 'Discuss constructivism, Bloom\'s taxonomy, scaffolding, metacognition, and critical pedagogy.' },
    { icon: '🏫', title: 'Classroom Management', desc: 'Navigate lesson planning, formative assessment, rubrics, feedback, and inclusive teaching.' },
    { icon: '📋', title: 'Curriculum Design', desc: 'Understand curricula: competency frameworks, didactic sequences, graduate profiles, and alignment.' },
    { icon: '💻', title: 'Educational Technology', desc: 'Explore flipped classrooms, gamification, hybrid learning, digital literacy, and AI in education.' },
  ],

  priorKnowledge: [
    { fromLesson: 'L7.7', label: 'Creative Writing & Storytelling', detail: 'L7.7 developed narrative and creative techniques. Now apply those communication skills to pedagogical contexts and lesson design.' },
    { fromLesson: 'L6.6', label: 'Philosophy & Ethics', detail: 'L6.6 explored philosophical thinking and ethical reasoning. Now use that analytical framework for educational philosophy and critical pedagogy.' },
    { fromLesson: 'L5.7', label: 'Academic Spanish', detail: 'L5.7 introduced academic register and research language. Now specialize that register for educational discourse and professional teaching contexts.' },
  ],

  sectionTransitions: [
    { afterSection: 'pedagogy-theory', text: 'You understand learning theory! Now let\'s apply it to the practical realities of managing a classroom.' },
    { afterSection: 'classroom-management', text: 'Classroom skills mastered! Let\'s zoom out and look at how entire curricula are designed.' },
    { afterSection: 'curriculum-design', text: 'You can design a curriculum! Now let\'s explore how technology is transforming education.' },
    { afterSection: 'dialogues', text: 'Rich educational discussions! Let\'s explore the cultural dimensions of teaching in the Spanish-speaking world.' },
    { afterSection: 'cultural', text: 'Cultural context understood! Now test your pedagogical knowledge in the Lesson Planner.' },
    { afterSection: 'lesson-planner', text: 'Final stretch — quiz time!' },
  ],

  personalizedVocab: [
    { spanish: 'El constructivismo sostiene...', english: 'Constructivism holds...' },
    { spanish: 'La zona de desarrollo próximo...', english: 'The zone of proximal development...' },
    { spanish: 'La evaluación formativa...', english: 'Formative assessment...' },
    { spanish: 'El plan de estudios...', english: 'The curriculum...' },
    { spanish: 'El aula invertida...', english: 'The flipped classroom...' },
    { spanish: 'La brecha digital...', english: 'The digital divide...' },
  ],

  pronunciationChallenges: [
    { spanish: 'La zona de desarrollo próximo es la distancia entre lo que el alumno sabe y lo que puede lograr con ayuda', pronunciation: 'lah SOH-nah deh deh-sah-RROH-yoh PROHK-see-moh ehs lah dees-TAHN-see-ah EHN-treh loh keh ehl ah-LOOM-noh SAH-beh ee loh keh PWEH-deh loh-GRAHR kohn ah-YOO-dah', english: 'The zone of proximal development is the distance between what the student knows and what they can achieve with help', audio: 'la-zona-de-desarrollo', tip: 'This Vygotskian concept is central to education worldwide. "Zona de desarrollo próximo" (ZDP) is the standard Spanish term. "Próximo" means "near/proximal" — the learning that is just within reach with proper scaffolding.' },
    { spanish: 'La taxonomía de Bloom clasifica los niveles de pensamiento desde recordar hasta crear', pronunciation: 'lah tahk-soh-noh-MEE-ah deh bloom klah-SEE-fee-kah lohs nee-BEH-lehs deh pehn-sah-mee-EHN-toh DEHS-deh rreh-kohr-DAHR AHS-tah kreh-AHR', english: 'Bloom\'s taxonomy classifies levels of thinking from remembering to creating', audio: 'la-taxonomia-de-bloom', tip: '"Taxonomía" keeps the Greek-derived pronunciation. In Spanish education, the six levels are: recordar, comprender, aplicar, analizar, evaluar, crear. This progression from lower to higher-order thinking is universal in curriculum design.' },
    { spanish: 'La retroalimentación efectiva es específica, oportuna y orientada al mejoramiento', pronunciation: 'lah rreh-troh-ah-lee-mehn-tah-see-OHN eh-fehk-TEE-bah ehs ehs-peh-SEE-fee-kah oh-pohr-TOO-nah ee oh-ree-ehn-TAH-dah ahl meh-hoh-rah-mee-EHN-toh', english: 'Effective feedback is specific, timely, and improvement-oriented', audio: 'la-retroalimentacion-efectiva', tip: '"Retroalimentación" (feedback) is a compound word: retro (back) + alimentación (nourishment). In education, it literally means "feeding back" — nourishing the learner with information about their performance.' },
    { spanish: 'El aula invertida transfiere la instrucción directa fuera del aula', pronunciation: 'ehl OW-lah een-behr-TEE-dah trahns-fee-EH-reh lah eens-trook-see-OHN dee-REHK-tah FWEH-rah dehl OW-lah', english: 'The flipped classroom transfers direct instruction outside the classroom', audio: 'el-aula-invertida', tip: '"Aula invertida" is a direct calque from English "flipped classroom." Despite "aula" being feminine, you say "el aula" because it starts with a stressed "a" — the same rule as "el agua" and "el águila."' },
    { spanish: 'La gamificación aplica elementos de juego al proceso educativo para aumentar la motivación', pronunciation: 'lah gah-mee-fee-kah-see-OHN ah-PLEE-kah eh-leh-MEHN-tohs deh HWEH-goh ahl proh-SEH-soh eh-doo-kah-TEE-boh PAH-rah ow-mehn-TAHR lah moh-tee-bah-see-OHN', english: 'Gamification applies game elements to the educational process to increase motivation', audio: 'la-gamificacion-aplica', tip: '"Gamificación" is an anglicism that has been fully adopted into Spanish educational vocabulary. The RAE has not officially accepted it yet, but it is universally used in professional contexts across Latin America and Spain.' },
    { spanish: 'La brecha digital excluye a millones de estudiantes del acceso a la educación tecnológica', pronunciation: 'lah BREH-chah dee-hee-TAHL ehks-KLOO-yeh ah mee-YOH-nehs deh ehs-too-dee-AHN-tehs dehl ahk-SEH-soh ah lah eh-doo-kah-see-OHN tehk-noh-LOH-hee-kah', english: 'The digital divide excludes millions of students from access to technology-based education', audio: 'la-brecha-digital', tip: '"Brecha" (gap/breach) is used metaphorically in many contexts: brecha digital (digital divide), brecha salarial (wage gap), brecha generacional (generation gap). It conveys a painful separation that demands action.' },
  ],

  sections: [
    { id: 'welcome', label: 'Welcome' },
    { id: 'prior-knowledge', label: 'What You Already Know' },
    { id: 'objectives', label: "What You'll Learn" },
    { id: 'personalized-context', label: 'See in YOUR Context' },
    { id: 'pedagogy-theory', label: 'Pedagogy & Theory' },
    { id: 'classroom-management', label: 'Classroom Management' },
    { id: 'curriculum-design', label: 'Curriculum Design' },
    { id: 'educational-technology', label: 'Educational Technology' },
    { id: 'pronunciation-tips', label: 'Pronunciation Tips' },
    { id: 'pronunciation-practice', label: 'Pronunciation Practice' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'matching-game', label: 'Matching Game' },
    { id: 'education-sorting', label: 'Education Sorting' },
    { id: 'dialogues', label: 'Dialogues' },
    { id: 'cultural', label: 'Cultural Insights' },
    { id: 'lesson-planner', label: 'Lesson Planner' },
    { id: 'knowledge-check', label: 'Knowledge Check' },
  ],

  phraseSections: [
    {
      id: 'pedagogy-theory',
      title: 'Pedagogy & Theory — Pedagogía y Teoría',
      description: 'The foundational theories of learning: constructivism, scaffolding, Bloom\'s taxonomy, and critical pedagogy.',
      tabs: [
        { label: 'Learning Theories', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'pedagogy-theory').slice(0, 6) },
        { label: 'Critical Thinking', color: 'orange', columns: 1, phrases: PHRASES.filter(p => p.category === 'pedagogy-theory').slice(6) },
      ],
    },
    {
      id: 'classroom-management',
      title: 'Classroom Management — Gestión del Aula',
      description: 'The practical art of teaching: planning, assessment, feedback, and creating a positive learning environment.',
      tabs: [
        { label: 'Planning & Assessment', color: 'blue', columns: 1, phrases: PHRASES.filter(p => p.category === 'classroom-management').slice(0, 6) },
        { label: 'Environment & Inclusion', color: 'purple', columns: 1, phrases: PHRASES.filter(p => p.category === 'classroom-management').slice(6) },
      ],
    },
    {
      id: 'curriculum-design',
      title: 'Curriculum Design — Diseño Curricular',
      description: 'Building educational programs: standards, competencies, didactic sequences, and curricular alignment.',
      tabs: [
        { label: 'Structure & Standards', color: 'emerald', columns: 1, phrases: PHRASES.filter(p => p.category === 'curriculum-design').slice(0, 6) },
        { label: 'Integration & Assessment', color: 'teal', columns: 1, phrases: PHRASES.filter(p => p.category === 'curriculum-design').slice(6) },
      ],
    },
    {
      id: 'educational-technology',
      title: 'Educational Technology — Tecnología Educativa',
      description: 'Innovation in education: flipped classrooms, gamification, AI, and the digital divide.',
      tabs: [
        { label: 'Digital Innovation', color: 'rose', columns: 1, phrases: PHRASES.filter(p => p.category === 'educational-technology').slice(0, 6) },
        { label: 'AI & Equity', color: 'amber', columns: 1, phrases: PHRASES.filter(p => p.category === 'educational-technology').slice(6) },
      ],
    },
  ],

  pronunciationTips: [
    {
      title: 'Educational Jargon Crosses Languages',
      content: 'Much educational vocabulary is shared across Spanish and English through Latin and Greek roots: pedagogía/pedagogy, currículo/curriculum, evaluación/evaluation, didáctica/didactics. However, some terms differ significantly: "retroalimentación" (feedback), "andamiaje" (scaffolding), "aula invertida" (flipped classroom). These Spanish-specific terms reveal how educational concepts are culturally adapted.',
      example: 'pedagogía ↔ pedagogy | currículo ↔ curriculum | retroalimentación ↔ feedback',
    },
    {
      title: 'The "Aprendizaje" Family',
      content: 'The word "aprendizaje" (learning) generates an entire vocabulary family: aprendizaje significativo (meaningful), cooperativo (cooperative), basado en problemas (problem-based), híbrido (hybrid), por proyectos (project-based), autónomo (autonomous). Mastering the base word and its modifiers unlocks dozens of compound terms instantly.',
      example: 'aprendizaje significativo | cooperativo | basado en problemas | híbrido | por proyectos',
      reviewFrom: 'L7.7',
    },
    {
      title: 'Evaluación: More Than Just "Test"',
      content: 'In Spanish education, "evaluación" is a rich concept with many varieties: formativa (formative — during learning), sumativa (summative — after learning), diagnóstica (diagnostic — before learning), adaptativa (adaptive — adjusting to the learner), por competencias (competency-based). Each type serves a different purpose and uses different instruments.',
      example: 'evaluación formativa | sumativa | diagnóstica | adaptativa | por competencias',
      reviewFrom: 'L6.6',
    },
    {
      title: 'The "El Aula" Exception',
      content: '"Aula" (classroom) is feminine but takes the masculine article "el" in singular: "el aula invertida" (the flipped classroom). This is because "aula" starts with a stressed "a." In plural, it returns to feminine: "las aulas." This same rule applies to: el agua (water), el águila (eagle), el alma (soul), el arma (weapon). It\'s a phonetic rule, not a gender change.',
      example: 'el aula (singular) → las aulas (plural) | el aula invertida | el aula inclusiva',
    },
  ],

  flashcardGroups: [
    {
      key: 'pedagogy',
      label: 'Pedagogy & Theory',
      audioKeys: ['el-constructivismo-sostiene', 'el-aprendizaje-significativo', 'la-zona-de-desarrollo', 'el-andamiaje-proporciona', 'la-taxonomia-de-bloom', 'la-metacognicion-es', 'la-pedagogia-critica', 'las-inteligencias-multiples'],
    },
    {
      key: 'classroom',
      label: 'Classroom Management',
      audioKeys: ['la-planificacion-didactica', 'los-objetivos-de-aprendizaje', 'la-evaluacion-formativa', 'la-rubrica-establece', 'la-retroalimentacion-efectiva', 'la-gestion-del-aula', 'la-inclusion-educativa', 'la-disciplina-positiva'],
    },
    {
      key: 'curriculum-tech',
      label: 'Curriculum & Technology',
      audioKeys: ['el-plan-de-estudios', 'las-competencias-transversales', 'el-aula-invertida', 'la-gamificacion-aplica', 'el-aprendizaje-hibrido', 'la-brecha-digital', 'la-inteligencia-artificial', 'la-ciudadania-digital'],
    },
  ],

  matchPairs: [
    { left: 'La zona de desarrollo próximo', right: 'Gap between current and potential learning' },
    { left: 'El andamiaje', right: 'Temporary support for learners' },
    { left: 'La evaluación formativa', right: 'Assessment during the learning process' },
    { left: 'La rúbrica', right: 'Criteria and performance levels' },
    { left: 'El aula invertida', right: 'Instruction outside, practice in class' },
    { left: 'La gamificación', right: 'Game elements in education' },
    { left: 'La brecha digital', right: 'Technology access inequality' },
    { left: 'El currículo oculto', right: 'Implicit values in school culture' },
  ],
  matchLabels: { left: 'Concepto Educativo', right: 'Meaning' },

  sortActivities: [
    {
      title: 'Theory or Practice?',
      instruction: 'Is this concept primarily theoretical or a practical classroom tool?',
      buckets: ['Learning Theory 📚', 'Practical Tool 🔧'],
      items: [
        { text: 'El constructivismo', bucket: 'Learning Theory 📚' },
        { text: 'La zona de desarrollo próximo', bucket: 'Learning Theory 📚' },
        { text: 'La taxonomía de Bloom', bucket: 'Learning Theory 📚' },
        { text: 'Las inteligencias múltiples', bucket: 'Learning Theory 📚' },
        { text: 'La rúbrica de evaluación', bucket: 'Practical Tool 🔧' },
        { text: 'La planificación didáctica', bucket: 'Practical Tool 🔧' },
        { text: 'El portafolio del estudiante', bucket: 'Practical Tool 🔧' },
        { text: 'La evaluación formativa', bucket: 'Practical Tool 🔧' },
      ],
    },
    {
      title: 'Formative or Summative?',
      instruction: 'Is this assessment type formative (during learning) or summative (after learning)?',
      buckets: ['Formative (During) 📝', 'Summative (After) 📊'],
      items: [
        { text: 'Preguntas durante la clase', bucket: 'Formative (During) 📝' },
        { text: 'Retroalimentación en borradores', bucket: 'Formative (During) 📝' },
        { text: 'Diagnóstico inicial', bucket: 'Formative (During) 📝' },
        { text: 'Observación del progreso', bucket: 'Formative (During) 📝' },
        { text: 'Examen final del curso', bucket: 'Summative (After) 📊' },
        { text: 'Proyecto final de semestre', bucket: 'Summative (After) 📊' },
        { text: 'Calificación del portafolio', bucket: 'Summative (After) 📊' },
        { text: 'Prueba estandarizada nacional', bucket: 'Summative (After) 📊' },
      ],
    },
  ],
  sortSectionId: 'education-sorting',
  sortTitle: 'Education Sorting',

  dialogues: [
    {
      id: 'dialogue-workshop-santiago',
      title: 'Teacher Training Workshop — Santiago',
      location: 'Santiago',
      lines: [
        { speaker: 'Capacitadora', text: 'Bienvenidos al taller de actualización docente. Hoy exploraremos cómo integrar la evaluación formativa en nuestra práctica diaria.', audio: '/audio/L8.8/phrases/d1-line1.mp3' },
        { speaker: 'Prof. Muñoz', text: 'Yo uso evaluaciones sumativas al final de cada unidad, pero mis estudiantes llegan al examen sin saber si van bien o mal.', audio: '/audio/L8.8/phrases/d1-line2.mp3' },
        { speaker: 'Capacitadora', text: 'Exacto. La evaluación formativa permite ajustar la enseñanza durante el proceso, no después. ¿Alguien usa estrategias de retroalimentación continua?', audio: '/audio/L8.8/phrases/d1-line3.mp3' },
        { speaker: 'Prof. Vega', text: 'Yo implementé el aula invertida el semestre pasado. Los estudiantes ven videos en casa y en clase hacemos actividades prácticas con retroalimentación inmediata.', audio: '/audio/L8.8/phrases/d1-line4.mp3', annotations: [{ phrase: 'el aula invertida', fromLesson: 'L8.8', note: 'Flipped classroom model: direct instruction outside class, active learning in class' }] },
        { speaker: 'Prof. Muñoz', text: '¿Y la brecha digital? Muchos de mis alumnos no tienen internet estable en casa.', audio: '/audio/L8.8/phrases/d1-line5.mp3' },
        { speaker: 'Prof. Vega', text: 'Es un desafío real. Uso recursos educativos abiertos que los estudiantes pueden descargar en el laboratorio de la escuela.', audio: '/audio/L8.8/phrases/d1-line6.mp3' },
        { speaker: 'Capacitadora', text: 'La educación diferenciada nos enseña que no hay una solución única. Debemos adaptar nuestras estrategias al contexto sociocultural de nuestros alumnos.', audio: '/audio/L8.8/phrases/d1-line7.mp3' },
        { speaker: 'Prof. Soto', text: 'Yo quiero hablar sobre la gamificación. ¿Realmente funciona o es solo una moda?', audio: '/audio/L8.8/phrases/d1-line8.mp3' },
        { speaker: 'Capacitadora', text: 'Las investigaciones muestran que la gamificación aumenta la motivación intrínseca cuando se diseña bien. Pero no es magia; requiere planificación didáctica sólida.', audio: '/audio/L8.8/phrases/d1-line9.mp3' },
        { speaker: 'Prof. Soto', text: 'Me preocupa que los estudiantes se enfoquen en "ganar puntos" y no en aprender.', audio: '/audio/L8.8/phrases/d1-line10.mp3' },
        { speaker: 'Capacitadora', text: 'Por eso es clave usar la taxonomía de Bloom: los puntos deben premiar los niveles altos — analizar, evaluar, crear — no solo recordar.', audio: '/audio/L8.8/phrases/d1-line11.mp3' },
        { speaker: 'Prof. Muñoz', text: 'Y las rúbricas son esenciales. Sin criterios claros, los estudiantes no saben qué se espera de ellos.', audio: '/audio/L8.8/phrases/d1-line12.mp3' },
        { speaker: 'Prof. Vega', text: 'Al final, todo vuelve al aprendizaje significativo: si conectamos los contenidos con la vida real del estudiante, la motivación viene sola.', audio: '/audio/L8.8/phrases/d1-line13.mp3' },
        { speaker: 'Capacitadora', text: 'Exactamente. Recuerden: el andamiaje proporciona apoyo temporal. Nuestro objetivo es que los estudiantes vuelen solos.', audio: '/audio/L8.8/phrases/d1-line14.mp3' },
        { speaker: 'Prof. Soto', text: 'La metacognición también es clave. Cuando los alumnos reflexionan sobre cómo aprenden, aprenden mejor.', audio: '/audio/L8.8/phrases/d1-line15.mp3' },
        { speaker: 'Capacitadora', text: 'Hermosa síntesis. Construyamos juntos una educación que prepare a nuestros estudiantes para un mundo en constante cambio.', audio: '/audio/L8.8/phrases/d1-line16.mp3' },
      ],
    },
    {
      id: 'dialogue-faculty-salamanca',
      title: 'University Faculty Meeting on Curriculum Reform — Salamanca',
      location: 'Salamanca',
      lines: [
        { speaker: 'Decano', text: 'Colegas, la razón de esta reunión es discutir la reforma del plan de estudios de nuestra facultad de Educación. Los datos del perfil de egreso muestran deficiencias.', audio: '/audio/L8.8/phrases/d2-line1.mp3' },
        { speaker: 'Dra. Hernández', text: 'Nuestros graduados salen con teoría sólida pero sin competencias prácticas. El aprendizaje por proyectos debería tener más peso en el currículo.', audio: '/audio/L8.8/phrases/d2-line2.mp3' },
        { speaker: 'Dr. Ramos', text: 'Estoy de acuerdo. Además, necesitamos incorporar la alfabetización digital como competencia transversal, no como una materia aislada.', audio: '/audio/L8.8/phrases/d2-line3.mp3', annotations: [{ phrase: 'competencia transversal', fromLesson: 'L8.8', note: 'Cross-cutting competency: skills developed across all subjects' }] },
        { speaker: 'Decano', text: '¿Cómo proponéis lograr la alineación curricular? Los objetivos, las actividades y la evaluación deben ser coherentes.', audio: '/audio/L8.8/phrases/d2-line4.mp3' },
        { speaker: 'Dra. Fernández', text: 'Sugiero que revisemos la secuencia didáctica de cada asignatura. Muchos contenidos se repiten sin profundización.', audio: '/audio/L8.8/phrases/d2-line5.mp3' },
        { speaker: 'Dr. Ramos', text: 'Y debemos actualizar los contenidos curriculares. La inteligencia artificial está transformando la educación y nuestro programa no la menciona.', audio: '/audio/L8.8/phrases/d2-line6.mp3' },
        { speaker: 'Dra. Hernández', text: 'Paulo Freire nos enseñó que la pedagogía crítica cuestiona las relaciones de poder. Nuestro currículo debe formar educadores que piensen críticamente, no que repitan fórmulas.', audio: '/audio/L8.8/phrases/d2-line7.mp3' },
        { speaker: 'Decano', text: 'La interdisciplinariedad también es clave. Los problemas educativos reales no se resuelven desde una sola disciplina.', audio: '/audio/L8.8/phrases/d2-line8.mp3' },
        { speaker: 'Dra. Fernández', text: 'Propongo incluir la evaluación por competencias en lugar de exámenes memorísticos. Necesitamos medir lo que los estudiantes pueden hacer, no solo lo que saben recitar.', audio: '/audio/L8.8/phrases/d2-line9.mp3' },
        { speaker: 'Dr. Ramos', text: 'Y no olvidemos la adecuación curricular. Nuestros futuros profesores deben saber cómo adaptar su enseñanza a estudiantes con necesidades educativas especiales.', audio: '/audio/L8.8/phrases/d2-line10.mp3' },
        { speaker: 'Dra. Hernández', text: 'La inclusión educativa no es un tema aparte; debe ser el eje de toda la formación docente.', audio: '/audio/L8.8/phrases/d2-line11.mp3' },
        { speaker: 'Decano', text: 'También debemos abordar el currículo oculto. Lo que enseñamos implícitamente es tan importante como los contenidos formales.', audio: '/audio/L8.8/phrases/d2-line12.mp3' },
        { speaker: 'Dra. Fernández', text: 'Los estándares educativos internacionales nos dan un marco. Pero cada contexto cultural requiere adaptación local.', audio: '/audio/L8.8/phrases/d2-line13.mp3' },
        { speaker: 'Dr. Ramos', text: 'Resumiendo: necesitamos un plan de estudios que forme docentes reflexivos, tecnológicamente competentes e inclusivos.', audio: '/audio/L8.8/phrases/d2-line14.mp3' },
        { speaker: 'Decano', text: 'Perfecto. Crearemos una comisión de reforma con representantes de todas las áreas. La educación del futuro se construye hoy.', audio: '/audio/L8.8/phrases/d2-line15.mp3' },
      ],
    },
  ],
  dialogueDescription: 'Participate in a teacher training workshop on formative assessment and educational technology in Santiago, then join a university faculty meeting on curriculum reform in Salamanca.',

  culturalNotes: [
    {
      title: 'Paulo Freire\'s Legacy in Latin American Education',
      content: 'Brazilian educator Paulo Freire (1921-1997) revolutionized education worldwide with his concept of "educación popular" (popular education) and "pedagogía del oprimido" (pedagogy of the oppressed). His ideas — that education should liberate rather than domesticate, that learners bring valuable knowledge, and that the "banking model" of depositing information is dehumanizing — remain deeply influential across Latin America. In countries like Brazil, Mexico, and Colombia, Freirean methods are widely used in community education, adult literacy programs, and teacher training. His concept of "concientización" (conscientization) — developing critical awareness of social reality — has no English equivalent and remains uniquely powerful.',
    },
    {
      title: 'Bilingual Education Debates in the Americas',
      content: 'Bilingual education is one of the most contentious topics in Latin American pedagogy. Countries like Paraguay (Spanish-Guaraní), Bolivia (Spanish plus 36 indigenous languages), and Guatemala (Spanish-Maya languages) grapple with how to provide quality education in multiple languages. The debate centers on "educación intercultural bilingüe" (intercultural bilingual education or EIB): should indigenous children learn in their native language first, or should they start in Spanish? Research overwhelmingly supports mother-tongue-based multilingual education, but implementation faces challenges of funding, teacher training, and materials development. In the US, bilingual education for Spanish-speaking students remains equally debated.',
    },
    {
      title: 'Rural Education Challenges: The Escuela Multigrado',
      content: 'In rural Latin America, the "escuela multigrado" (multigrade school) is a reality for millions of children. A single teacher instructs students across multiple grade levels in one classroom — sometimes from first through sixth grade simultaneously. Countries like Mexico (with its "escuelas telesecundarias" using television-based instruction) and Colombia (with the "Escuela Nueva" model that has been adopted in 16 countries) have developed innovative solutions. These models demonstrate that effective education is possible with limited resources when pedagogy is creative and culturally responsive. The "Escuela Nueva" emphasizes cooperative learning, flexible scheduling, and community involvement — principles that align with constructivism.',
    },
  ],
  culturalGradient: 'from-amber-50 to-orange-50',

  quiz: [
    { id: 1, type: 'mc', text: '"El constructivismo" holds that learning is:', options: ['Passively received from the teacher', 'Actively built from experience', 'Only possible through memorization', 'Determined by genetics'], answer: 1 },
    { id: 2, type: 'fill', text: 'Complete: "La zona de desarrollo ___ es la distancia entre lo que el alumno sabe y lo que puede lograr con ayuda" (proximal)', answer: 'próximo' },
    { id: 3, type: 'tf', text: '"La evaluación formativa" is conducted at the end of a course to assign final grades.', answer: false },
    { id: 4, type: 'mc', text: '"El andamiaje" in education refers to:', options: ['Permanent support that never changes', 'Temporary support removed as the student progresses', 'Physical classroom infrastructure', 'A punishment system'], answer: 1 },
    { id: 5, type: 'mc', text: 'Bloom\'s Taxonomy classifies thinking levels from:', options: ['Easy to hard', 'Remembering to creating', 'Reading to writing', 'Simple to complex vocabulary'], answer: 1 },
    { id: 6, type: 'fill', text: 'Complete: "La ___ establece criterios claros y niveles de desempeño" (rubric)', answer: 'rúbrica' },
    { id: 7, type: 'mc', text: '"El aula invertida" transfers direct instruction to:', options: ['After school detention', 'Outside the classroom (home/online)', 'The principal\'s office', 'Another teacher'], answer: 1 },
    { id: 8, type: 'mc', text: 'In Dialogue 1, what concern does Prof. Muñoz raise about the flipped classroom?', options: ['It costs too much', 'Students lack internet access (digital divide)', 'It takes too long', 'Students don\'t like videos'], answer: 1 },
    { id: 9, type: 'tf', text: '"La gamificación" applies game elements to education to increase motivation.', answer: true },
    { id: 10, type: 'mc', text: '"La adecuación curricular" is used to:', options: ['Make the curriculum harder', 'Adapt the program for special educational needs', 'Eliminate difficult subjects', 'Standardize all schools'], answer: 1 },
    { id: 11, type: 'fill', text: 'Complete: "La ___ digital excluye a millones de estudiantes" (divide/gap)', answer: 'brecha' },
    { id: 12, type: 'mc', text: 'In Dialogue 2, Dra. Hernández references which educational philosopher?', options: ['Jean Piaget', 'Paulo Freire', 'John Dewey', 'Lev Vygotsky'], answer: 1 },
    { id: 13, type: 'mc', text: '"Las competencias transversales" are developed:', options: ['In one specific subject', 'Across all subjects of the curriculum', 'Only in university', 'Only in technology class'], answer: 1 },
    { id: 14, type: 'tf', text: 'Colombia\'s "Escuela Nueva" model has been adopted in 16 countries for multigrade education.', answer: true },
    { id: 15, type: 'mc', text: '"El currículo oculto" refers to:', options: ['Secret lesson plans', 'Implicit values transmitted through school culture', 'Hidden exam answers', 'Curriculum that is classified'], answer: 1 },
  ],

  audioBase: '/audio/L8.8/phrases',

  uniqueActivity: {
    id: 'LessonPlannerL88',
    sectionId: 'lesson-planner',
    sectionColor: 'bg-amber-50/40',
    sectionBorder: 'border-amber-100',
  },

  sectionColors: {
    'prior-knowledge': { bg: 'bg-indigo-50/30', border: 'border-indigo-100' },
    objectives: { bg: 'bg-white', border: '' },
    'personalized-context': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'pedagogy-theory': { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'classroom-management': { bg: 'bg-blue-50/30', border: 'border-blue-100' },
    'curriculum-design': { bg: 'bg-emerald-50/30', border: 'border-emerald-100' },
    'educational-technology': { bg: 'bg-rose-50/30', border: 'border-rose-100' },
    'pronunciation-tips': { bg: 'bg-yellow-50/30', border: 'border-yellow-100' },
    'pronunciation-practice': { bg: 'bg-blue-50/30', border: 'border-blue-200' },
    flashcards: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'matching-game': { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    'education-sorting': { bg: 'bg-teal-50/30', border: 'border-teal-100' },
    dialogues: { bg: 'bg-orange-50/30', border: 'border-orange-100' },
    cultural: { bg: 'bg-amber-50/30', border: 'border-amber-100' },
    'lesson-planner': { bg: 'bg-amber-50/40', border: 'border-amber-100' },
    'knowledge-check': { bg: 'bg-indigo-50/40', border: 'border-indigo-100' },
  },
}
