import { Component } from "@angular/core";
import PSPDFKit from "pspdfkit";

@Component({
selector: "app-root",
templateUrl: "./app.component.html",
styleUrls: ["app.component.css"]
})
export class AppComponent {
	title = "PSPDFKit for Web Angular Example";

	ngAfterViewInit() {
		PSPDFKit.load({
			// Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
			licenseKey: 'cWwxMSbTYAunwoS5ECx1PMFzSfUOvnKJLX4fet8jmG0EtkoA_7Hwn9djqzW9OYR6g43TO9JUrnaakfpKnq3_enyymWr_j5Wqq5Vd-bokWL0A_ZVGzNqfwnaldefPBiAteeGHepE5Fva7vcn9q7t0PXnZJxaHMJ_lrP1M9w8LXepJHWKpmfOACM6ljuSv1KQ0ndn3Gds_xS3AlwlKk98IU31gf_g8KAv7XJMmREUeSbROX4KMqi9Sa4cMT8rzjhkHYsMX7E3e6lk_6-Mh63kydPGVi8pelrpvjDEnqee0AcKA5jgUF8i6uIhA5uGAWyb1HeOlMwr3Ka9IHrH6rJARJLNRBeLtMguLqqq98qni3qCzGZtQtZrL3TMqF6sO4zedLvtrydQ_bK1u4p7I5dcBO8i1jj9SjQmEWpaFWqtLVDL53TEy-D9EzCmnX_lrOdNUT7jdnlEMhf4Kdlt3F5oUSeVakrFCvG3IV_ZwexctjYRzl-mwirjAcYe88sIAHwtyVi1PFl3Hz0loiaBvmJH2VkQI4UmVCu7r07P9W8BsM0BknnHGVC9puB6PVZawYaoz2v2mNZF0qzd-hJAgrCHtIZ2nr81RMCKyBNwJhZbZu_dpSODO2kkRgWiIHT-wg4eHlk3uvYdKByGpaq0C6tdTM1Wf0YdQkMK8a-SA_y4E4-d-pZV4loW1kmhLYCC2XTM8roxb5sLKMRGMtWGwCDc1yx_LilXkUnL1gyzff_lrAMEx8Gn_ywVlVdFHLupTtLjJ',
      baseUrl: location.protocol + "//" + location.host + "/assets/",
			document: "/assets/editablePdf.pdf",
			container: "#pspdfkit-container",
		}).then(instance => {
			// For the sake of this demo, store the PSPDFKit for Web instance
			// on the global object so that you can open the dev tools and
			// play with the PSPDFKit API.
			//(window as any).instance = instance;
      instance.getFormFields().then(function (formFields) {
        console.log("All form fields", formFields.toJS());

        instance.setFormFieldValues({
          "Given Name Text Box": "PSPDFKit",
        });
      });

      return instance;
		});
	}
}
