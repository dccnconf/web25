import React from "react";

const PaymentDetails = ({ className }) => {
  return (
    <div className={className}>
      <h3 className="h3">Payment information</h3>
      <p className="md:leading-7 md:text-xl text-gray-700 my-4">
        Payment is possible only in Russian rubles by wire transfer or in cash onsite. For international participants
        and payment in euro, please contact the Organizing Committee email: <a href="mailto:org@dccn.ru"
                                                                               className="text-blue-600 hover:underline">org@dccn.ru</a> and <a
        href="mailto:nata_cot@mail.ru" className="text-blue-600 hover:underline">nata_cot@mail.ru</a>
      </p>

      <p className="md:leading-7 md:text-xl text-gray-700 my-4">
        In order to pay the registration fee, follow these steps:
      </p>

      <h4 className="h4">
        Step 1.
      </h4>

      <p className="md:leading-7 md:text-xl text-gray-700 my-4">
        Use the following payment details for funds transfer in Russian rubles:
      </p>

      <div className="mt-1">
        <table className="table-auto w-full mt-8">
          <tbody>
          <tr>
            <td className="border px-4 py-1">Получатель (Beneficiary):</td>
            <td className="border px-4 py-1">АО Научно-производственная фирма “Информационные и
              сетевые технологии» (АО НПФ «ИНСЕТ»)
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-1">Юридический адрес (Address):</td>
            <td className="border px-4 py-1">
              129085, г. Москва, Звездный б-р, д. 19, строение 1, этаж 14, помещение I, комната 30 (оф.1415)
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-1">ИНН (Individual Taxpayer Number):</td>
            <td className="border px-4 py-1">7717647073</td>
          </tr>
          <tr>
            <td className="border px-4 py-1">КПП (Industrial Enterprises Classifier):</td>
            <td className="border px-4 py-1">771701001</td>
          </tr>
          <tr>
            <td className="border px-4 py-1">Р/с (Bank account number):</td>
            <td className="border px-4 py-1">40702810038090003329, ПАО "Сбербанк России" г. Москва</td>
          </tr>
          <tr>
            <td className="border px-4 py-1">БИК (Bank Identification Code):</td>
            <td className="border px-4 py-1">044525225</td>
          </tr>
          <tr>
            <td className="border px-4 py-1">К/с (Correspondent account):</td>
            <td className="border px-4 py-1">30101810400000000225</td>
          </tr>
          </tbody>
        </table>

        <p className="mt-4">Главный бухгалтер: Котельникова Наталья Николаевна, Тел.: 8-985-293-97-07, Почтовый адрес:
          117525, г. Москва, Сумской проезд, д. 31, корп. 2, кв. 80
        </p>
      </div>

      <h4 className="h4">
        Step 2.
      </h4>
      <p className="md:leading-7 md:text-xl text-gray-700 my-4">
        Fill in and sign the following documents:
      </p>
      <ul className="mt-1 text-gray-600 font-medium">
        <li className="mb-1">
          <a href="/downloads/agreement-fiz.doc" className="text-indigo-700" target="_blank">
            Agreement with an individual participant (Договор с физическим лицом)</a>
        </li>
        <li className="mb-1">
          <a href="/downloads/act-fiz.doc" className="text-indigo-700" target="_blank">
            Act to an agreement with an individual participant (Акт с физическим лицом)</a>
        </li>
        <li className="mb-1">
          <a href="/downloads/agreement-legal.doc" className="text-indigo-700" target="_blank">
            Agreement with a legal entity (Договор с юридическим лицом)</a>
        </li>
        <li className="mb-1">
          <a href="/downloads/act-legal.doc" className="text-indigo-700" target="_blank">Act to an agreement with a
            legal entity (Акт с юридическим лицом)</a>
        </li>
      </ul>

      <p className="md:leading-7 md:text-xl text-gray-700 my-4">
        Payment order templates (образцы платежных поручений):
      </p>

      <p className="mb-0 mt-4">если взнос равен 10000 руб - <a href="/downloads/pay_10000.rtf"
                                                               className="text-indigo-700"
                                                               target="_blank">скачать</a></p>
      <p className="mb-0">если взнос равен 1000 руб - <a href="/downloads/pay_1000.rtf" className="text-indigo-700"
                                                         target="_blank">скачать</a></p>
      <p className="mb-0">если взнос равен 8500 руб - <a href="/downloads/pay_8500.rtf" className="text-indigo-700"
                                                         target="_blank">скачать</a></p>
      <p className="mt-4">Необходимо заменить "ФИО участника" на фамилию и инициалы участника.</p>

      <div className="border rounded-xl bg-pink-100 border-red-300 px-6 py-4 mt-4 text-lg leading-7 text-gray-700">
        <span className="font-semibold text-pink-400 mr-2">ВАЖНО:</span>
        <p>
          Если участнику необходимы подтверждающие документы об оплате, то платеж должен быть совершен от юридического
          лица участника.
          В этом случае счет на оплату оргвзноса выставляется на юридическое лицо, договор и акт оформляются с
          организацией участника.
          Для выставления счета необходимо обратиться к Котельниковой Наталье Николаевне <a href="mailto:nata_cot@mail.ru" className="text-blue-600 hover:underline">nata_cot@mail.ru</a>, выслав реквизиты организации и контакты бухгалтерии.
        </p>
      </div>


      <div className="border rounded-xl bg-pink-100 border-red-300 px-6 py-4 mt-8 text-lg leading-7 text-gray-700">
        <span className="font-semibold text-pink-400 mr-2">IMPORTANT:</span>
        <p>
          If the participant requires supporting documents for payment, the payment must be made from the participant's
          legal entity.
          In this case, the invoice for the registration fee is issued to the legal entity, the agreement and act are
          drawn up with the participant's organization.
          To issue an invoice, please contact Natalia Kotelnikova <a href="mailto:nata_cot@mail.ru" className="text-blue-600 hover:underline">nata_cot@mail.ru</a>, sending the
          organization's details and the accounting department contacts.
        </p>
      </div>


      <h4 className="h4">
        Step 3.
      </h4>
      <p className="md:leading-7 md:text-xl text-gray-700 my-4">
        Send the scanned copies of the signed documents together with the payment confirmation to the Organizing
        Committee email: <a href="mailto:org@dccn.ru" className="text-blue-600 hover:underline">org@dccn.ru</a> and <a
        href="mailto:nata_cot@mail.ru" className="text-blue-600 hover:underline">nata_cot@mail.ru</a>.
      </p>

      <h4 className="h4">
        Step 4.
      </h4>
      <p className="md:leading-7 md:text-xl text-gray-700 my-4">
        Please send the hard copies of the signed documents (договор + акт) by regular mail to the postal address of
        the chief accountant: 117525, г. Москва, Сумской проезд, д.31, корп.2, кв.80. Строго на имя Котельниковой Н.Н.
      </p>

      <div className="border rounded-xl bg-pink-100 border-red-300 px-6 py-4 mt-4 text-lg leading-7 text-gray-700">
        <span className="font-semibold text-pink-400 mr-2">ВАЖНО:</span>
        <p>
          В назначении платежа необходимо указать сумму НДС (см. таблицу оргвзносов выше), а также ФИО участника(-ов).
          В противном случае мы не сможем корректно отследить платеж и идентифицировать плательщика.
        </p>
        <p>
          В графе назначения платежа необходимо указать:
          <span className="font-bold">“ФИО участника(-ов). Оргвзнос за DCCN2025, в т.ч. НДС (20%) — X руб."</span>
          (замените ФИО вашим полным именем, а X - суммой НДС, указанной в таблице выше).
        </p>
        <p>
          Если Вы платите за несколько участников, просьба перечислить имена всех участников,
          за которых вносится оплата.

        </p>
      </div>


      <div className="border rounded-xl bg-pink-100 border-red-300 px-6 py-4 mt-8 text-lg leading-7 text-gray-700">
        <span className="font-semibold text-pink-400 mr-2">IMPORTANT:</span>
        <p>
          In the purpose of payment, one should necessarily specify the amount of VAT (see the table of fees above),
          as well as the full name of the participant(s).
          Otherwise we will not be able to properly trace the payment and identify the payer.
        </p>
        <p>
          <span className="font-bold">Please specify in the MEMO LINE the following: “NAME SURNAME, DCCN2025 fee, incl. VAT (20%) — X RUB ”.</span>
          Replace NAME and SURNAME with your full name and X with the VAT amount shown in the fees table above.
        </p>
        <p>
          For Russian participants please indicate the name in Russian,
          If one person pays on behalf of a group of participants, please specify the names of all the participants.
        </p>
      </div>
    </div>
  )
};

export default PaymentDetails;
