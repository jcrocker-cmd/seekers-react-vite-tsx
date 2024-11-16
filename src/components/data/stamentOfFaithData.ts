import { v7 as uuidv4 } from "uuid";

// Interface for statement data
export interface StatementDataProps {
  id: string;
  heading: string;
  content: string;
}

// Array of statements data
export const statementsData: StatementDataProps[] = [
  {
    heading: "The Word of God",
    content:
      "We believe that the Bible is the Word of God, fully inspired and without error in the original manuscripts, written under the inspiration of the Holy Spirit, and that, it has supreme authority in all matters of faith and conduct.",
  },
  {
    heading: "The Trinity",
    content:
      "We believe that there is one living and true, eternally existing in three persons: that these are equal in every Divine perfection and that they execute distinct but harmonious offices in the work of creation, providence and redemption.",
  },
  {
    heading: "God the Father",
    content:
      "We believe in God the Father, an infinite, personal spirit, perfect in holiness, wisdom, power and love. We believe that He concerns Himself mercifully in the affairs of men, that He hears and answers prayer, and that He saves from sin and death all who come to Him through Jesus Christ.",
  },
  {
    heading: "Jesus Christ",
    content:
      "We believe in Jesus Christ, God’s only Son, conceived by the Holy Spirit. We believe in His Virgin birth, sinless life, miracle, and teaching. We believe in His substitutionary atoning death, bodily resurrection, ascension into heaven, perpetual intercession for His people and personal visible return to earth",
  },
  {
    heading: "The Holy Spirit",
    content:
      "We believe in the Holy Spirit who came forth from the Father and the Son, to convict the world of sin, righteousness and judgment, and to regenerate, sanctify, and empower all who believe in Jesus Christ. We believe the Holy Spirit indwells every believer in Christ and that He is an abiding helper, teacher and guide.",
  },
  {
    heading: "Regeneration",
    content:
      "We believe that all men are sinners by nature and by choice and are therefore, under condemnation. We believe that those who repent of their sins and trust in Jesus Christ as Savior are saved by grace through faith.",
  },
  {
    heading: "The Church",
    content:
      "We believe in the universal church, a living spiritual body of which Christ is the head and all regenerated persons are member. We believe in the local church, consisting of a company of believers in Jesus Christ, baptized on a credible profession of faith and associated for worship, work and fellowship. We believe that God has laid upon the members of the local church the primary task of giving the gospel of Jesus Christ to the lost world.",
  },
  {
    heading: "Christian Conduct",
    content:
      "We believe that a Christian should live for the glory of God and the well-being of his fellow men; that his conduct should be blameless before the world; that he should be faithful steward of his possessions and that he should seek to realize for himself and others the full stature of maturity in Christ.",
  },
  {
    heading: "The Ordinances",
    content:
      "We believe that the Lord Jesus Christ has committed two ordinances to the local church, baptism and the Lord’s Supper. We believe that the Christian baptism is in the immersion of a believer in water into the name of the Triune God. We believe that the Lord’s Supper was instituted by Christ for commemoration of His death. We believe that these two ordinances should be observed and administered until the return of the Lord Jesus Christ.",
  },
  {
    heading: "Religious Liberty",
    content:
      "We believe that every human being has direct relations with God and is responsible to God alone in all matters of faith; that each church is independent and must be free from interference by any ecclesiastical or political authority; that therefore, Church or State, must be kept separate as having separate functions – each fulfilling its duties, free from dictation or patronage of the other.",
  },
  {
    heading: "Church Cooperation",
    content:
      "We believe that the local churches can best promote the cause of Christ by cooperating with one another in a denominational organization. Such an organization, whether a regional or district conference, exists and functions by the will of the churches. Cooperation in a conference is voluntary and may be terminated at any time. Churches may likewise cooperate with inter-denominational fellowships on a voluntary independent basis.",
  },
  {
    heading: "The Last Things",
    content:
      "We believe in the personal and visible return of the Lord Jesus Christ to earth and the establishment of His kingdom. We believe in the resurrection of the body, the final judgment, the eternal felicity of the righteous and the endless sufferings of the wicked.",
  },
].map((statmentItem) => ({ ...statmentItem, id: uuidv4() }));
