import Breadcrumbs from '../components/Breadcrumbs.jsx';
import Callout from '../components/Callout.jsx';
import PageMeta from '../components/PageMeta.jsx';
import ProjectGallery from '../components/ProjectGallery.jsx';

export default function GalleryPage() {
  return <>
    <PageMeta title="Project Gallery | Icon Concrete Hyderabad" description="Browse a filterable Icon Concrete project gallery. Photo placeholders will be replaced with approved plant and site images." path="/gallery" />
    <section className="mp-gallery-hero"><Breadcrumbs current="Gallery" /><span className="mp-eyebrow">PHOTO ARCHIVE / ICON CONCRETE</span><h1>On site.<br /><em>In progress.</em></h1><p>Browse the gallery by project type. Demonstration photos are marked for replacement with real, approved Icon Concrete imagery.</p></section>
    <section className="mp-gallery-page mp-section"><ProjectGallery masonry /></section>
    <Callout title="Have approved project photos?" text="Share real site and plant imagery with the company team before it is added to the public gallery." />
  </>;
}
